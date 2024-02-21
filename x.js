

// LMC "lite" by Mr Gordon
// only supported mnemonics are INP, ADD, OUT and HLT
// uses immediate memory addressing rather than LMC's direct mode
let program = ['INP', 'ADD 7', 'OUT', 'HLT']
let state = { pc: 0, cir: '', mar: '', mdr: '', acc: 0 }

console.log('\n---Running LMC-lite program---\n', program)

;(function tick () {
  
  console.log('\n-------- New FDE cycle begins ---------\n')

  // Fetch
  console.log('\nBefore fetch', state)
  state.mar = state.pc
  state.mdr = program[state.mar]
  state.pc++
  state.cir = state.mdr
  console.log('After fetch', state)
  prompt('Fetch phase finished. Hit enter for decode phase.')

  // Decode
  let operation = state.cir.match(/[A-Z]+/)[0] // assume caps op eg ADD
  let operand = operation === 'ADD' ? Number(state.cir.match(/[0-9]+/)[0]) : 'n/a'
  console.log(`\nDecoded CIR as "${operation}" with operand "${operand}"`)
  prompt('\nDecode phase finished. Hit enter for execute phase.')

  // Execute
  console.log('\nBefore execute', state)
  if (operation === 'INP') {
    state.acc = Number(prompt('What is your input number?'))
  } else if (operation === 'OUT') {
    console.log(`---\nOUTPUT - The number being output is ${state.acc}\n---`)
  } else if (operation === 'ADD') {
    state.acc += operand
  } else {
    console.log(`Program halted on instruction ${operation}`)
    return
  }
  console.log('\nAfter execute', state)
  prompt('Execute phase finished. Hit enter for next FDE cycle.')

  tick()

})()
