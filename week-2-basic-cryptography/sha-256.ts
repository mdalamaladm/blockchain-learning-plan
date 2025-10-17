const SIZE: number = 32;
const CHUNK: number = 64;
const INITS: number[] = [
  first32BitFraction(Math.sqrt(2)), // 0x6a09e667
  first32BitFraction(Math.sqrt(3)), // 0xbb67ae85
  first32BitFraction(Math.sqrt(5)), // 0x3c6ef372
  first32BitFraction(Math.sqrt(7)), // 0xa54ff53a
  first32BitFraction(Math.sqrt(11)), // 0x510e527f
  first32BitFraction(Math.sqrt(13)), // 0x9b05688c
  first32BitFraction(Math.sqrt(17)), // 0x1f83d9ab
  first32BitFraction(Math.sqrt(19)), // 0x5be0cd19
];

function first32BitFraction (number: number): number {
  return parseInt((number).toString(2).split('.')[1].slice(0, 32), 2);
}

function toUint8Array (msg: any): Uint8Array {
  if (typeof msg === 'boolean') {
    return new Uint8Array([ msg === true ? 1 : 0 ]);
  }

  const json: string = JSON.stringify(msg);

  return new TextEncoder().encode(json);
}

function toUint64 (number: bigint): Uint8Array {
  const result: Uint8Array = new Uint8Array(8);

  for (let i = 7; i >= 0; --i) {
    result[i] = Number(number & 0xFFn);

    number = number >> 8n;
  }

  return result;
}

function pad (msg: Uint8Array) {
  const msgBitLength: number = msg.length * 8;

  const separator: Uint8Array = new Uint8Array([0x80]);
  const separatorBitLength: number = separator.length * 8;

  const msgLength64: Uint8Array = toUint64(BigInt(msgBitLength));
  const msgLength64BitLength: number = msgLength64.length * 8;

  const paddingBitLength: number = 512 - (msgBitLength + separatorBitLength + msgLength64BitLength) % 512;
  const padding: Uint8Array = new Uint8Array(Math.ceil(paddingBitLength / 8));

  const paddedMsg: Uint8Array = new Uint8Array(msg.length + separator.length + padding.length + msgLength64.length);
  paddedMsg.set(msg, 0);
  paddedMsg.set(separator, msg.length);
  paddedMsg.set(padding, msg.length + separator.length);
  paddedMsg.set(msgLength64, msg.length + separator.length + padding.length);

  return paddedMsg;
}

function parse (msgPadded: Uint8Array): Uint8Array[] {
  const msgBlocks: Uint8Array[] = [];

  const round: number = msgPadded.length / CHUNK;

  for (let i: number = 0; i < round; i++) {
    msgBlocks.push(msgPadded.slice(i * CHUNK, (i + 1) * CHUNK));
  }

  return msgBlocks;
}

function sha256 (msg: any) {
  let byteMsg: Uint8Array = toUint8Array(msg);

  const msgPadded: Uint8Array = pad(byteMsg);
  const msgBlocks: Uint8Array[] = parse(msgPadded);

  console.log(msgBlocks);
}

sha256('abc');