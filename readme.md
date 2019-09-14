Este é o meu script **_pessoal_** de pós instalação do **Ubuntu 18.04.3 LTS**

Eu faço a instalação [_**mínima**_](https://www.youtube.com/watch?v=3CuzduPRrNQ) do **Ubuntu Desktop**.

Primeiro eu executo os comandos indicados no arquivo [**postinst.md**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/postinst.md) e na sequência eu executo os comandos indicados no arquivo [**extras.md**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/extras.md), após executar todos os comandos, eu reinicio a máquina e importo o arquivo [**dash-to-panel.cfg**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/resources/dash-to-panel.cfg) nas configurações do **_Dash-to-panel_**.

**Aviso**: _os comandos indicados devem ser executados 1 de cada vez, para garantir que não hajam erros._

Uma imagem _**ilustrativa**_ de como ficou o meu desktop:
![screenshot](https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/screenshot.png)

**Problemas não solucionados:**
 - Não consegui ativar o _**Vulkan**_ e consequentemente não consigo rodar jogos com o _**DXVK**_, mesmo usando o _**PPA de drivers**_, não funcionou.
 - Não sei como setar o tema _**Materia-dark-compact**_ para o _shell_ do _**GDM**_.
 - Não sei como importar automaticamente as configurações do _**Dash-to-panel**_.
 - Não encontrei uma _extensão_ do _**GNOME**_ que me permita fazer um ajuste fino nos ícones da _área de notificação_, gostaria de _diminuir o tamanho_ e o _espaçamento_ dos ícones, testei algumas, mas nenhuma funcionou.
 - Acontece um _atraso/travamento_ quando eu uso o comando `xdotool` nos _gestos_ do mouse.
