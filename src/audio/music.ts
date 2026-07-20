/** Procedural music: play / victory fanfare / sad game-over. */

type Mood = 'play' | 'prize' | 'gameover'

class ReformaMusic {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private timer: number | null = null
  private muted = false
  private started = false
  private mood: Mood = 'play'
  /** Delay before next bar (stinger gap), consumed once */
  private pendingDelay = 0

  private readonly melodyPlay = [262, 294, 330, 392, 440, 392, 330, 294]
  private readonly bassPlay = [131, 131, 147, 147, 165, 165, 147, 131]

  /** Victoria: mayor brillante, loop más largo (16 tiempos) */
  private readonly melodyPrize = [
    523, 587, 659, 784, 880, 784, 659, 587, 659, 784, 988, 1047, 1175, 1047, 880,
    784,
  ]
  private readonly bassPrize = [
    196, 196, 247, 247, 262, 262, 294, 294, 262, 262, 247, 247, 220, 220, 196,
    196,
  ]

  private readonly melodyOver = [392, 370, 349, 330, 311, 294, 277, 262]
  private readonly bassOver = [98, 98, 92, 92, 87, 87, 82, 82]

  isMuted() {
    return this.muted
  }

  async ensure() {
    if (!this.ctx) {
      this.ctx = new AudioContext()
      this.master = this.ctx.createGain()
      this.master.gain.value = this.muted ? 0 : 0.12
      this.master.connect(this.ctx.destination)
    }
    if (this.ctx.state === 'suspended') {
      await this.ctx.resume()
    }
  }

  async start() {
    await this.ensure()
    this.started = true
    this.setMood('play', true)
  }

  setMood(mood: Mood, force = false) {
    if (!force && this.mood === mood) return
    this.mood = mood
    if (!this.started || !this.ctx) return

    this.clearTimer()
    if (mood === 'prize') {
      this.playVictoryStinger()
      this.pendingDelay = 1.35
    } else if (mood === 'gameover') {
      this.playSadStinger()
      this.pendingDelay = 1.25
    } else {
      this.pendingDelay = 0
    }
    this.schedule()
  }

  async toggleMute() {
    await this.ensure()
    this.muted = !this.muted
    if (this.master) {
      this.master.gain.setTargetAtTime(
        this.muted ? 0 : 0.12,
        this.ctx!.currentTime,
        0.05,
      )
    }
    if (!this.started && !this.muted) {
      await this.start()
    }
    return this.muted
  }

  private clearTimer() {
    if (this.timer != null) {
      window.clearTimeout(this.timer)
      this.timer = null
    }
  }

  private tone(
    freq: number,
    when: number,
    dur: number,
    type: OscillatorType,
    gain: number,
  ) {
    if (!this.ctx || !this.master || freq <= 0) return
    const osc = this.ctx.createOscillator()
    const g = this.ctx.createGain()
    osc.type = type
    osc.frequency.value = freq
    g.gain.setValueAtTime(0.0001, when)
    g.gain.exponentialRampToValueAtTime(Math.max(gain, 0.0002), when + 0.03)
    g.gain.exponentialRampToValueAtTime(0.0001, when + dur)
    osc.connect(g)
    g.connect(this.master)
    osc.start(when)
    osc.stop(when + dur + 0.03)
  }

  private playVictoryStinger() {
    if (!this.ctx) return
    const t0 = this.ctx.currentTime + 0.02
    ;[523, 659, 784, 988, 1175].forEach((f, i) => {
      this.tone(f, t0 + i * 0.1, 0.26, 'square', 0.24)
      this.tone(f / 2, t0 + i * 0.1, 0.28, 'triangle', 0.2)
    })
    this.tone(1568, t0 + 0.55, 0.2, 'square', 0.14)
    this.tone(1319, t0 + 0.7, 0.55, 'square', 0.2)
    this.tone(1047, t0 + 0.7, 0.6, 'triangle', 0.16)
    this.tone(784, t0 + 0.7, 0.65, 'triangle', 0.12)
  }

  private playSadStinger() {
    if (!this.ctx) return
    const t0 = this.ctx.currentTime + 0.02
    ;[392, 349, 311, 262].forEach((f, i) => {
      this.tone(f, t0 + i * 0.28, 0.45, 'sine', 0.28)
      this.tone(f / 2, t0 + i * 0.28, 0.5, 'triangle', 0.18)
    })
  }

  private schedule() {
    if (!this.ctx) return

    const beat =
      this.mood === 'prize' ? 0.2 : this.mood === 'gameover' ? 0.42 : 0.28
    const delay = this.pendingDelay
    this.pendingDelay = 0
    const now = this.ctx.currentTime + delay

    const melody =
      this.mood === 'prize'
        ? this.melodyPrize
        : this.mood === 'gameover'
          ? this.melodyOver
          : this.melodyPlay

    const bass =
      this.mood === 'prize'
        ? this.bassPrize
        : this.mood === 'gameover'
          ? this.bassOver
          : this.bassPlay

    const steps = melody.length
    const leadType: OscillatorType =
      this.mood === 'gameover' ? 'sine' : 'square'
    const leadGain =
      this.mood === 'prize' ? 0.2 : this.mood === 'gameover' ? 0.22 : 0.16

    for (let i = 0; i < steps; i++) {
      const t = now + i * beat
      const m = melody[i % melody.length]!
      const b = bass[i % bass.length]!
      this.tone(
        b,
        t,
        beat * 0.92,
        'triangle',
        this.mood === 'gameover' ? 0.28 : 0.32,
      )
      this.tone(
        m,
        t,
        beat * (this.mood === 'gameover' ? 0.85 : 0.5),
        leadType,
        leadGain,
      )
      if (this.mood === 'prize') {
        // Saltitos alegres en corcheas
        if (i % 2 === 0) {
          this.tone(m * 2, t + beat * 0.5, beat * 0.2, 'square', 0.09)
        }
        if (i % 4 === 3) {
          this.tone(m * 1.5, t + beat * 0.25, beat * 0.18, 'triangle', 0.1)
        }
      }
    }

    this.timer = window.setTimeout(
      () => this.schedule(),
      (delay + steps * beat) * 1000 - 30,
    )
  }
}

export const music = new ReformaMusic()
