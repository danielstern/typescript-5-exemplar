enum Instrument {
  LUTE,
  GUITAR,
  SITAR,
  LYRE,
  ACCORDION,
  HARMONICA,
  VOICE,
  SAXOPHONE
}

// 7029 No Fallthrough
export function numberToInstrument ( num : Number ) : Instrument {
  let selected = Instrument.VOICE
  switch (num) {
    case 0: 
      selected = Instrument.GUITAR
      break
    case 1: 
      selected =  Instrument.SITAR
    case 2: 
      selected = Instrument.LYRE
  }
  return selected
}

// 7027 No unreachable code
export function calculateDiscount ( 
  total : number, 
  is_vip_member : false 
) : number {
  let discount = total / 4
  if (is_vip_member) discount *= 2
  return discount
  discount /= 2
}

// 6113 no unused parameters
export function recommendInstrument ({
  age = 33,
  enjoys_jazz = false,
  reach = 1,
  tempo = "allegro"
}) : Instrument {
  if (enjoys_jazz) return Instrument.SAXOPHONE
  if (age > 40 && reach < 32.4) return Instrument.HARMONICA
  if (age > 25 && reach > 19.6) return Instrument.SITAR
  if (reach < 15) return Instrument.VOICE
  return Instrument.GUITAR
}

// 7006 No Implicit Any
class Tuner {
  getBaseFrequency(){
    return 440
  }
  checkPitch(pitch = 0){
    if (pitch === this.getBaseFrequency()) return true
    return false
  }
}

// 4114 No implicit overrides
export class HandheldTuner extends Tuner {
  getBaseFrequency(): number {
    return 400;
  }
}

// 2336 no implicit returns
enum Tempo {
  LARGO,
  ANDANTE,
  ALLEGRO
}
export function getTempo( bpm : number) : Tempo {
  if (bpm > 100) return Tempo.ALLEGRO
  if (bpm > 60) return Tempo.ANDANTE
  Tempo.ALLEGRO
}