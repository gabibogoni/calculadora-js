function calcular(tipo, valor) {
        
    if(tipo === 'acao') {

      if(valor === 'c') {
        // limpar o visor do resultado
        document.getElementById('resultado').value = '';          
      }
      

      if(valor === '=') {
        var valor_campo = eval(document.getElementById('resultado').value);
        //verifica se o resultado da expressão é valido
        if(valor_campo != undefined) {
          document.getElementById('resultado').value = valor_campo;
        }            
      }

      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {  
        var valor_com_todo_texto_input = document.getElementById('resultado').value;
        var ultimo_valor_digitado_no_input = valor_com_todo_texto_input.substr(-1);
        var input_sem_ultimo_digito = valor_com_todo_texto_input.slice(0, -1);
        var input_com_ultimo_digito_substituido = input_sem_ultimo_digito + valor;
        
        switch (ultimo_valor_digitado_no_input) {
          
          case '+': 
            document.getElementById('resultado').value = input_com_ultimo_digito_substituido
            break;
          case '-':
            document.getElementById('resultado').value = input_com_ultimo_digito_substituido
            break;
          case '*':
            document.getElementById('resultado').value = input_com_ultimo_digito_substituido
            break;
          case '/':
            document.getElementById('resultado').value = input_com_ultimo_digito_substituido
            break;
          case '.':
            break
          default: document.getElementById('resultado').value += valor;
        }
      }

    } else {
        //outra forma
        //var campo = document.getElementById('resultado').value
        //document.getElementById('resultado').value = valor + campo;
        document.getElementById('resultado').value += valor;
    }
  }