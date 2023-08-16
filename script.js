 // Função para desenhar a logo do SENAI no canvas
  function drawSENAI() {
    // Obtém o elemento canvas do documento
    const canvas = document.getElementById("canvas");
    // Obtém o contexto de desenho 2D do canvas
    const ctx = canvas.getContext("2d");
  
    // Substitua a URL da imagem abaixo pela URL da logo do SENAI
    const logoURL = "https://www.ufrgs.br/neo/wp-content/uploads/2019/11/logomarca-oficial-SENAI.jpg";
  
    // Cria um objeto de imagem
    const img = new Image();
  
    // Define a fonte da imagem como a URL da logo do SENAI
    img.src = logoURL;
  
    // Aguarda o carregamento da imagem antes de desenhá-la no canvas
    img.onload = () => {
      // Desenha a imagem no canvas (x, y, largura, altura)
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
  }
  
  // Chama a função para desenhar a logo do SENAI no canvas
  drawSENAI();