## Repositórios
```bash
echo "deb https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/xUbuntu_18.04 ./" | sudo tee /etc/apt/sources.list.d/wine-obs.list
wget -O- -q https://download.opensuse.org/repositories/Emulators:/Wine:/Debian/xUbuntu_18.04/Release.key | sudo apt-key add -
sudo add-apt-repository -y ppa:ubuntustudio-ppa/backports
sudo add-apt-repository -y ppa:papirus/papirus-dev
sudo add-apt-repository -y ppa:mc3man/bionic-media
sudo add-apt-repository -y ppa:xuzhen666/gnome-mpv
```
## Atualização e limpeza
```bash
sudo apt dist-upgrade -y
sudo apt install -y deborphan git
deborphan | xargs sudo apt autoremove --purge -y
echo 'deb http://deb.xanmod.org releases main' | sudo tee /etc/apt/sources.list.d/xanmod-kernel.list && wget -qO - https://dl.xanmod.org/gpg.key | sudo apt-key add -
sudo apt update && sudo apt -y install linux-xanmod
sudo apt autoremove --purge -y linux*generic*
sudo apt install -y intel-microcode iucode-tool thermald
```
## Otimizações de desempenho
```bash
sudo usermod -aG audio $USER;sudo usermod -aG video $USER
echo 'hard stack unlimited
nproc unlimited
nofile 1048576
as unlimited
cpu unlimited
fsize unlimited
msgqueue unlimited
locks unlimited
* hard nofile 1048576
@audio   -  nice      -19' | sudo tee /etc/security/limits.d/rauldipeas.conf
echo 'vm.swappiness=10
net.ipv4.tcp_syncookies=1
net.ipv4.ip_forward=1
net.ipv4.tcp_dsack=0
#net.ipv4.tcp_sack=0
fs.file-max=100000
kernel.sched_migration_cost_ns=5000000
kernel.sched_autogroup_enabled=0
vm.dirty_background_bytes=16777216
vm.dirty_bytes=50331648
kernel.pid_max=4194304' | sudo tee /etc/sysctl.d/rauldipeas.conf
sudo apt-get install mesa-utils -y && sudo mkdir /etc/X11/xorg.conf.d/ && echo -e 'Section "Device"\n Identifier "Intel Graphics"\n Driver "Intel"\n Option "AccelMethod" "sna"\n Option "TearFree" "true"\nEndSection' | sudo tee /etc/X11/xorg.conf.d/20-intel.conf
sudo sed -i 's/quiet splash/quiet splash loglevel=0 logo.nologo vt.global_cursor_default=0 mitigations=off/g' /etc/default/grub
sudo sed -i 's/#GRUB_GFXMODE=640x480/GRUB_GFXMODE=1920x1080/g' /etc/default/grub
echo 'RESUME=none' | sudo tee /etc/initramfs-tools/conf.d/resume
echo 'FRAMEBUFFER=y' | sudo tee /etc/initramfs-tools/conf.d/splash
sudo sed -i 's/Window.SetBackgroundTopColor (0.2353, 0.2314, 0.2157);     # Nice colour on top of the screen fading to/Window.SetBackgroundTopColor (0.00, 0.00, 0.00);     # Nice colour on top of the screen fading to/g' /usr/share/plymouth/themes/ubuntu-mate-logo/ubuntu-mate-logo.script
sudo sed -i 's/Window.SetBackgroundBottomColor (0.2353, 0.2314, 0.2157);  # an equally nice colour on the bottom/Window.SetBackgroundBottomColor (0.00, 0.00, 0.00);  # an equally nice colour on the bottom/g' /usr/share/plymouth/themes/ubuntu-mate-logo/ubuntu-mate-logo.script
sudo update-initramfs -u -k all
git clone https://github.com/vinceliuice/grub2-themes
cd grub2-themes;sudo ./install.sh -l;cd ..
```
## Pro Áudio
```bash
echo jackd2 jackd/tweak_rt_limits string true | sudo debconf-set-selections
sudo apt install -y --no-install-recommends patchage ubuntustudio-controls
sudo apt install -y winehq-staging winetricks q4wine
sudo wget -O /usr/local/bin/winetricks https://raw.githubusercontent.com/Winetricks/winetricks/master/src/winetricks
sudo chmod +x /usr/local/bin/winetricks
wget -c https://github.com/osxmidi/LinVst/releases/download/2.66/LinVst-64bit-32bit_2.6.6.deb #update_link
sudo apt install -y ./LinVst*.deb
wget -c https://www.reaper.fm/files/5.x/reaper5983_linux_x86_64.tar.xz #update_link
tar -Jxf reaper*.tar.xz;cd reaper_linux*
sudo ./install-reaper.sh --install /opt --quiet --integrate-desktop --usr-local-bin-symlink;cd ..
sudo wget -O /opt/REAPER/Plugins/reaper_sws64.so http://www.sws-extension.org/download/pre-release/linux-2.10.0.0/reaper_sws64.so
mkdir -pv ~/.config/REAPER/UserPlugins
wget -c https://github.com/cfillion/reapack/releases/download/v1.2.1/reaper_reapack64.so -O ~/.config/REAPER/UserPlugins/reaper_reapack64.so
echo "
Actions=NewProject;ShowAudioConfig;ReaMote;WhatsNew;License;
[Desktop Action NewProject]
Name=REAPER (create new project)
Name[pt_BR]=REAPER (criar novo projeto)
Exec=/opt/REAPER/reaper -new
Icon=cockos-reaper
[Desktop Action ShowAudioConfig]
Name=REAPER (show audio configuration on startup)
Name[pt_BR]=REAPER (mostrar configurações de áudio ao iniciar)
Exec=/opt/REAPER/reaper -audiocfg
Icon=cockos-reaper
[Desktop Action ReaMote]
Name=ReaMote
Exec=/opt/REAPER/reamote-server
Icon=folder-remote
[Desktop Action WhatsNew]
Name=What's new
Name[pt_BR]=O que há de novo?
Exec=xdg-open /opt/REAPER/whatsnew.txt
Icon=text-x-plain
[Desktop Action License]
Name=License and User Agreement
Name[pt_BR]=Licença e contrato de usuário
Exec=xdg-open /opt/REAPER/license.txt
Icon=text-x-plain" | sudo tee -a /usr/share/applications/cockos-reaper.desktop
```
## Aparência e usabilidade
```bash
sudo apt install -y breeze-cursor-theme folder-color-caja fonts-emojione fonts-powerline materia-gtk-theme papirus-icon-theme undistract-me
git clone https://github.com/brokoli-mate/mate-window-applets-themes
sudo cp -rv mate-window-applets-themes/window-buttons-themes/* /usr/share/icons/mate-window-applets/
wget -c https://github.com/hbin/top-programming-fonts/raw/master/Monaco-Linux.ttf
mkdir -p ~/.fonts;cp -rv Monaco* ~/.fonts
wget -c http://ftp.us.debian.org/debian/pool/main/f/fonts-quicksand/fonts-quicksand_0.2016-2_all.deb #update_link
sudo apt install -y ./fonts-quicksand*.deb
gsettings set org.mate.interface monospace-font-name 'Monaco Regular 11'
git clone --depth=1 https://github.com/Bash-it/bash-it.git ~/.bash_it
bash ~/.bash_it/install.sh --silent
sed -i 's/bobby/powerline/g' ~/.bashrc
echo '
# Undistract-Me
. /usr/share/undistract-me/long-running.bash
notify_when_long_running_commands_finish_install' >> ~/.bashrc
sudo sed -i 's/took/levou/g' /usr/share/undistract-me/long-running.bash
sudo sed -i 's/dialog-information/xterm/g' /usr/share/undistract-me/long-running.bash
sudo sed -i 's/Long\ command\ completed/Comando\ concluído\!/g' /usr/share/undistract-me/long-running.bash
sudo update-alternatives --set x-cursor-theme /etc/X11/cursors/Breeze_Snow.theme
dconf write /net/launchpad/plank/docks/dock1/show-dock-item false
dconf write /net/launchpad/plank/docks/dock1/theme 'Transparent'
gsettings set org.mate.peripherals-touchpad natural-scroll true
gsettings set org.mate.Marco.general mouse-button-modifier '<Super>'
```
## Extras
```bash
wget -c https://github.com/AppImage/appimaged/releases/download/continuous/appimaged_1-alpha-git05c4438.travis209_amd64.deb #update_link
sudo apt install -y ./appimaged*.deb
sudo cp -v /usr/share/applications/appimaged.desktop /etc/xdg/autostart/
sudo apt install -y --no-install-recommends gnome-mpv
gsettings set io.github.celluloid-player.Celluloid mpv-options --save-position-on-quit
sudo apt install -y deluge-gtk deluge-web deluged diodon flowblade gnome-alsamixer neofetch p7zip-full redshift-gtk synaptic unar #openssh-server x11vnc
sudo sed -i 's/Icon=\/usr\/share\/pixmaps\/gnome-alsamixer\/gnome-alsamixer-icon.png/Icon=gnome-alsamixer-icon/g' /usr/share/applications/gnome-alsamixer.desktop
sudo wget -cO /usr/local/bin/neofetch https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch
sudo chmod +x -v /usr/local/bin/neofetch
wget -c https://download.teamviewer.com/download/linux/teamviewer_amd64.deb
sudo apt install -y ./teamviewer*.deb
```
## MATE Tweak/Aparência/Painel
 - Layout **Cupertino**
 - Botões de janela à direita
 - Desativar animações
 - Temas _**Breeze_Snow**_/_**Materia-dark-compact**_/_**Papirus-Dark**_
 - Window Buttons com tema _**Materia**_
 - Cor _**#282828**_ para o painel

## WINE
```bash
winetricks mfc42
#wget -c https://download.microsoft.com/download/8/e/c/8ec3a7d8-05b4-440a-a71e-ca3ee25fe057/rktools.exe
#wine rktools.exe
winetricks vcrun2015
#wget -c https://github.com/osxmidi/LinVst/blob/master/Waves/Waves.reg
#regedit Waves.reg
winetricks win7
```
## AutoStart NoDisplay=false
```bash
sudo sed -i 's/NoDisplay=true/NoDisplay=false/g' /etc/xdg/autostart/*.desktop
mkdir -p ~/.config/autostart
cp /etc/xdg/autostart/at-spi-dbus-bus.desktop ~/.config/autostart #acessibilidade
cp /etc/xdg/autostart/blueman.desktop ~/.config/autostart #bluetooth
cp /etc/xdg/autostart/caja-dropbox-autostart.desktop ~/.config/autostart #dropbox
cp /etc/xdg/autostart/indicator-messages.desktop ~/.config/autostart #mensagens
cp /etc/xdg/autostart/mate-hud.desktop ~/.config/autostart #buscar_por_ações_nos_menus
cp /etc/xdg/autostart/mate-optimus.desktop ~/.config/autostart #NVIDIA
cp /etc/xdg/autostart/onboard-autostart.desktop ~/.config/autostart #teclado_virtual
cp /etc/xdg/autostart/orca-autostart.desktop ~/.config/autostart #leitor_de_tela
cp /etc/xdg/autostart/print-applet.desktop ~/.config/autostart #impressoras
cp /etc/xdg/autostart/snap-userd-autostart.desktop ~/.config/autostart #snap
cp /etc/xdg/autostart/spice-vdagent.desktop ~/.config/autostart #acesso_remoto
cp /etc/xdg/autostart/ubuntu-mate-welcome-autostart.desktop ~/.config/autostart #tela_de_boas_vindas
cp /etc/xdg/autostart/update-notifier.desktop ~/.config/autostart #atualizador_de_programas
echo X-MATE-Autostart-enabled=false | tee -a ~/.config/autostart/*.desktop
```
