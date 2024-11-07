🕒 Como Manter o Temporizador Sempre Visível em Qualquer Página
Bem-vindo! Neste tutorial, você aprenderá como editar o script AutoHotkey para manter o temporizador ou qualquer outra página sempre visível, mesmo quando você navegar por outras janelas. Vamos ao passo a passo!

📜 Passo 1: Instalar o AutoHotkey
Antes de rodar o script, você precisa instalar o AutoHotkey. Siga os passos abaixo:

Acesse o site oficial do AutoHotkey: AutoHotkey - Site Oficial.
Clique no botão Download.
Após o download, execute o instalador e siga as instruções para concluir a instalação.
🌐 Passo 2: Abrir o Temporizador
Agora que o AutoHotkey está instalado, vamos abrir o temporizador na página HTML ou em um site. Você pode seguir uma das opções abaixo:

Opção 1: Usando o Arquivo Local
Localize o arquivo index.html no seu computador.
Abra o arquivo index.html com seu navegador preferido (Chrome, Firefox, Edge, etc.).
O temporizador será exibido na tela.
Opção 2: Usando o Site Online
Caso prefira um site online, basta acessar o link do temporizador em seu navegador, como por exemplo:

Exemplo de Temporizador Online
⚙️ Passo 3: Editar o Script AutoHotkey para Outra Página
Agora, vamos garantir que o temporizador fique visível enquanto você navega por outras páginas. Para isso, é necessário editar o título da janela que o script AutoHotkey vai identificar. Aqui estão os passos para fazer isso:

Abra o arquivo DeixarSempreVisivel.ahk com seu editor de texto favorito (Notepad++, Visual Studio Code, etc.).

Localize a linha abaixo no script:

windowTitle := "Temporizador - Unimed"  ; Aqui, você pode colocar o título exato da janela do Chrome ou parte do título.
Altere o valor de windowTitle para o título da janela que você deseja manter visível. Por exemplo:

Se o título da página for "Relógio Online", altere para:

windowTitle := "Relógio Online"
Se você preferir usar parte do título da janela, pode fazer assim:

windowTitle := "Relógio"  ; O script vai procurar qualquer janela que contenha "Relógio" no título.
Salve o arquivo depois de editar o título.

Execute o script novamente para garantir que o temporizador ou a nova página seja mantida sempre visível.

🎨 Personalizações Adicionais
Se você deseja personalizar ainda mais o comportamento do temporizador ou do script, aqui estão algumas opções:

Mover o Temporizador: Você pode ajustar a posição do temporizador na tela editando o código no arquivo HTML.
Alterar o Estilo: No arquivo index.html, você pode modificar o estilo CSS para mudar a fonte, cor e tamanho do temporizador, conforme sua preferência.
🚀 Dicas Rápidas
Para fechar o script AutoHotkey: Clique com o botão direito do mouse no ícone do AutoHotkey na bandeja do sistema (próximo ao relógio) e selecione "Exit".
Para editar o script: Clique com o botão direito no arquivo DeixarSempreVisivel.ahk e selecione "Edit Script" para abrir o código e fazer modificações.

🎉 Agradecimentos
Obrigado por usar este projeto! Esperamos que o temporizador ajude a manter o foco e a produtividade no seu dia a dia. ⏳✨

🔑 Licença
Este projeto é licenciado sob a MIT License.
