const logger = () => {
  const resp = {};

  // 2chi text dan keyingi harbir textni olish
  for (let i = 2; i < process.argv.length; i++) {
    // olingan textlarni array qilish agar = teng dan keyin ajratish arrayni
    const arg = process.argv[i].split("=");
    // resp saqlovchisiga arg array larnin object qiliberish
    // object property keylar nomiga birinchi arg arrayini beryapmiz va
    // object ikkinchi malumtiga arg ning 2 arrayini beryapmiz agar 2 array bo'lsa bo'lmasa true beryapmiz
    resp[arg[0]] = arg[1] ? arg[1] : true;
  }

  // resp objni return qilyapmiz
  return resp;
};

// consolega berilgan textlar object korinishida chiqadi
console.log(logger());
// consolega node programsi pathi va commanda ishlatilgan file pathi chiqadi
// console.log(process.argv);
