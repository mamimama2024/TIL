//商品の個数を選択するセレクター
const selector = document.querySelectorAll('.item_num');

//商品の金額
const item_amounts = document.querySelectorAll('.item_amount');

//合計金額表示の下に警告表示を出す関数
const createCaution = () => {
 const amountBox = document.querySelector('.total_amount_box');
   const html = `
   <p class="caution px-2 text-pink-600">カートの合計金額の上限は10000円に設定されています。</p>
   `;
   amountBox.innerHTML += html;
}

// 商品の個数選択時に「合計金額を計算する」イベントをセット
selector.forEach(function(s) {
 s.addEventListener('change', e => {
   // 全部の金額を取得し、個数分足し合わせる
   let total_amount = 0;
   item_amounts.forEach(function(s, index) {
     total_amount = total_amount + parseInt(s.innerHTML) * selector[index].value
   });
   if (total_amount < 10000) {
     if (document.querySelector('.caution')){
       document.querySelector('.caution').remove();
     }
     const cart_amount = document.querySelector('#cart_amount');
     cart_amount.innerHTML = total_amount;
   } else {
     if (!document.querySelector('.caution')){
       createCaution();
     }
   }
 });
});