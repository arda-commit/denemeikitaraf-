module.exports = {
  name:"cf",
  code:`
  $if[$randomText[a;c;b]!=c]
  Maalesef kaybettiniz. $message kadar paranızı kaybettiniz
  $setUserVar[coin;$sub[$getUserVar[coin];$message[1]];$authorID]
  $else
  Tebrikler! kazandınız. $message kadar coin size eklendi
  $setUserVar[coin;$sum[$getUserVar[coin];$message];$authorID]
  $endif
  $onlyIf[$checkContains[.; ;,;a;b;c;ç;d;e;f;g;ğ;h;ı;i;j;k;l;m;n;o;ö;p;r;s;ş;t;;u;ü;v;y;z;x;q;A;B;C;Ç;D;E;F;G;Ğ;H;I;İ;J;K;L;M;N;O;Ö;P;R;S;Ş;T;U;Ü;V;Y;Z;X;Q]==true;lütfen doğru bir sayı girin! örnek 200]
  $onlyIf[$message=<$getUserVar[coin];o kadar paran yok!]
  $onlyIf[$message=<0;0ın üstünde 1 rakam girin!]
  $argsCheck[1;bir sayı gir]
  $suppressErrors[Lütfen doğru bir sayı girin!]
  `
  }