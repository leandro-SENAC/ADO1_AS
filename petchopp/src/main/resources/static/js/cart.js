$(document).ready(function() {

  function calculaSubTotal(diminuiu) {
    var total = 0.00;
    // Pega todos os elementos da quantidade e
    // multiplica pelo valor individual
    $('input[name^=quantity]').each(function() {
      // Valor individual do produto
      let produtovalor = $(this).parent().parent().parent().find('#produtoPrecoId');
      let valor = parseFloat(produtovalor.attr('value'));

      // Multiplicação
      valor *= $(this).val();
      total += valor;
      console.log(total);

      // Elemento do subtotal sendo escrito
      let produtoSubtotal = $(this).parent().parent().parent().find('#subTotalId');
      produtoSubtotal.val(valor.toFixed(2));

    })

    // Elemento do total sendo escrito
    let carrinhoTotal = $("#carrinhoTotalId")
    console.log(carrinhoTotal);

    carrinhoTotal.text('R$ ' + total.toFixed(2));

  };

  calculaSubTotal();


  $('.quantity-right-plus').click(function(e) {

    // Stop acting like a button
    e.preventDefault();

    // Get the field element
    let quantidadeInput = $(this).parent().parent().parent().find("#quantity");
    // Parse into int
    let quantity = parseInt(quantidadeInput.val());
    // Set the value
    quantidadeInput.val(quantity + 1);
    calculaSubTotal();

  });

  $('.quantity-left-minus').click(function(e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field element
    let quantidadeInput = $(this).parent().parent().parent().find("#quantity");
    // Parse into int
    let quantity = parseInt(quantidadeInput.val());

    // Increment
    if (quantity > 1) {
      quantidadeInput.val(quantity - 1);
      calculaSubTotal(true);
    }

  });

});
