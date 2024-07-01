const getArgs = (args) => {
  // res malumotlarni oladigan obj saqlovchisi
  const res = {};
  // bu Destructuring orqali biz berilgan arrayni 2 ta malumotini olmaymiz executer va file ni
  // rest ni esa hamma malumotni oladimiz
  const [executer, file, ...rest] = args;

  // rest ni forEach qilib value, index, arr larini olamiz
  rest.forEach((value, index, arr) => {
    // agar value birinchi maluoti minus "-" bolsa berilgan topshiriq ammalga oshsin
    if (value.charAt(0) === "-") {
      // agar index == tern bolsa arr.lenght - 1  ga =>
      // arr.lenght - 1 = 0 ga
      if (index == arr.length - 1) {
        // res obj ga birinchi argumentiga true valuesi bo'lsin
        res[value.substring(1)] = true;
        // agar arr index birinchi malumoti "-" bo'lmasa unda
      } else if (arr[index + 1].charAt(0) != "-") {
        // res obj ni argumentiga birinchi args dan kelgan birinchi malumotni kirib
        // uni valusiga arrayni 1 index bolsa index 1 qo'shib 2 qilish value beradi yani bosh obj
        res[value.substring(1)] = arr[index + 1];
        // boshqa malimot kelsa
      } else {
        // res obj argumentiga birinchisiga args kelgan birinchi malumotni berib
        // uni valuesiga true beriladi
        res[value.substring(1)] = true;
      }
    }
  });

  // tahlil qilingan malumotlar hammsi res obj bilan retrun bo'ladi
  return res;
};

export default getArgs;
