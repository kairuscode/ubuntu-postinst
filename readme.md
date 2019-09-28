Este é o meu script **_pessoal_** de pós instalação do **Ubuntu 18.04.3 LTS**.

Eu faço a instalação [_**mínima**_](https://www.youtube.com/watch?v=3CuzduPRrNQ) do **Ubuntu Desktop**.

Primeiro eu executo os comandos indicados no arquivo [**postinst.md**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/postinst.md) e na sequência eu executo os comandos indicados no arquivo [**extras.md**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/extras.md), após executar todos os comandos, eu reinicio a máquina _~~e importo o arquivo [**dash-to-panel.cfg**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/resources/dash-to-panel.cfg) nas configurações do **Dash-to-panel**~~_.

**Aviso**: _os comandos indicados devem ser executados 1 de cada vez, para garantir que não hajam erros._

![Ubuntu](https://github.com/rauldipeas/ubuntu-postinst/raw/master/icons/distributor-logo-ubuntu.svg?sanitize=true) Algumas imagens _**ilustrativas**_ de como ficou o meu desktop:
![screenshot](https://github.com/rauldipeas/ubuntu-postinst/raw/master/screenshot.png)

![Steam](https://github.com/rauldipeas/ubuntu-postinst/raw/master/icons/steam.svg?sanitize=true) _**Jogos**_...
![screenshot2](https://github.com/rauldipeas/ubuntu-postinst/raw/master/screenshot2.png)

![Resolve](https://github.com/rauldipeas/ubuntu-postinst/raw/master/icons/resolve.svg?sanitize=true) _**DaVinci Resolve**_...
![screenshot2](https://github.com/rauldipeas/ubuntu-postinst/raw/master/screenshot3.png)

![GIMP](https://github.com/rauldipeas/ubuntu-postinst/raw/master/icons/gimp.svg?sanitize=true) _**GIMP**_...
![screenshot2](https://github.com/rauldipeas/ubuntu-postinst/raw/master/screenshot4.png)

![REAPER](https://github.com/rauldipeas/ubuntu-postinst/raw/master/icons/cockos-reaper.svg?sanitize=true) _**Cockos REAPER**_...
![screenshot2](https://github.com/rauldipeas/ubuntu-postinst/raw/master/screenshot5.png)

![bug](https://github.com/rauldipeas/ubuntu-postinst/raw/master/icons/tools-report-bug.svg?sanitize=true)
 **Problemas não solucionados:**
 - [x] ~~Não consegui ativar o _**Vulkan**_ e consequentemente não consigo rodar jogos com o _**DXVK**_, mesmo usando o _**PPA de drivers**_, não funcionou.~~ [**#vulkan-fix**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/postinst.md#driver-nvidia-vulkan-fix)
 - [ ] Não sei como setar o tema _**Materia-dark-compact**_ para o _shell_ do _**GDM**_.
 - [x] ~~Não sei como importar automaticamente as configurações do _**Dash-to-panel**_.~~ [**#import-fix**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/extras.md#temas-import-fix)
 - [x] ~~Não encontrei uma _extensão_ do _**GNOME**_ que me permita fazer um ajuste fino nos ícones da _área de notificação_, gostaria de _diminuir o tamanho_ e o _espaçamento_ dos ícones, testei algumas, mas nenhuma funcionou.~~ [**#tray-fix**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/postinst.md#gnome-shell-extensions-tray-fix)
 - [ ] Acontece um _atraso/travamento_ quando eu uso o comando `xdotool key` nos _gestos_ do mouse.

 **Em desenvolvimento:**

![xfce](https://github.com/rauldipeas/ubuntu-postinst/raw/master/icons/desktop-environment-xfce.svg?sanitize=true)
 [Desktop _**alternativo**_ com **XFCE**](https://github.com/rauldipeas/ubuntu-postinst/blob/master/flavours-lab/xfce-postinst.md)
![XFCE](https://github.com/rauldipeas/ubuntu-postinst/raw/master/flavours-lab/XFCE.png)
