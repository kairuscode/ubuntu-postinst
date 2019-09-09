# Pós instalação do Ubuntu 18.04 - 3/09/2019
# Extras
### Temas
```bash
sudo add-apt-repository -yn ppa:dyatlov-igor/materia-theme
sudo add-apt-repository -yn ppa:papirus/papirus
sudo add-apt-repository -yn ppa:papirus/papirus-dev
sudo add-apt-repository -y ppa:papirus/hardcode-tray
sudo apt install -y breeze-cursor-theme folder-color fonts-emojione fonts-powerline gnome-tweaks hardcode-tray materia-gtk-theme materia-kde papirus-icon-theme qt5ct;
wget -c http://ftp.us.debian.org/debian/pool/main/f/fonts-quicksand/fonts-quicksand_0.2016-2_all.deb #update_link
sudo apt install -y ./fonts-quicksand*.deb;
sudo sed -i 's/Roboto/Quicksand/g' /usr/share/themes/Materia*/gnome-shell/gnome-shell.css
sudo sed -i 's/Icon=\/opt\/resolve\/graphics\/DV_Resolve.png/Icon=resolve/g' /usr/share/applications/com.blackmagicdesign.resolve.desktop
sudo sed -i 's/ubuntu-dock@ubuntu.com//g' /usr/share/gnome-shell/modes/ubuntu.json
#sudo sed -i 's/ubuntu-appindicators@ubuntu.com//g' /usr/share/gnome-shell/modes/ubuntu.json
gsettings set org.gnome.desktop.interface font-name 'Quicksand Regular 11'
gsettings set org.gnome.desktop.interface gtk-theme Materia-dark-compact
gsettings set org.gnome.desktop.interface icon-theme Papirus-Dark
gsettings set org.gnome.desktop.interface cursor-theme Breeze_Snow
gsettings set org.gnome.desktop.wm.preferences titlebar-font 'Quicksand Bold 11'
gsettings set org.gnome.shell.extensions.user-theme name Materia-dark-compact
gsettings set org.gnome.desktop.interface clock-show-date true
gsettings set org.gnome.gedit.preferences.editor display-line-numbers true
gsettings set org.gnome.nautilus.desktop trash-icon-visible false
gsettings set org.gnome.nautilus.desktop volumes-visible false
gsettings set org.gnome.nautilus.icon-view default-zoom-level standard
gsettings set org.gnome.settings-daemon.plugins.color night-light-enabled true
gsettings set org.gnome.settings-daemon.plugins.color night-light-schedule-automatic true
gsettings set org.gnome.settings-daemon.plugins.color night-light-temperature uint32 5000
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-timeout 3600
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-ac-type nothing
gsettings set org.gnome.settings-daemon.plugins.power sleep-inactive-battery-type  nothing
gsettings set org.gnome.shell enabled-extensions "['user-theme@gnome-shell-extensions.gcampax.github.com', 'blyr@yozoon.dev.gmail.com', 'dash-to-panel@jderose9.github.com']"
gsettings set org.gnome.shell favorite-apps "['org.gnome.Nautilus.desktop', 'firefox.desktop', 'org.gnome.FeedReader.desktop', 'rambox.desktop', 'org.kde.kpat.desktop', 'steam.desktop', 'net.lutris.Lutris.desktop', 'ubuntustudio-controls.desktop', 'ToneLib-Zoom.desktop', 'carla.desktop', 'cockos-reaper.desktop', 'com.blackmagicdesign.resolve.desktop', 'gimp.desktop']"
gsettings set org.gtk.Settings.FileChooser sort-directories-first true
```
### GRUB
```bash
git clone https://github.com/vinceliuice/grub2-themes
cd grub2-themes;sudo ./install.sh -l;cd ..
```
### GDM
```bash
sudo sed -i 's/Ubuntu/Quicksand/g' /usr/share/gnome-shell/theme/ubuntu.css
xhost +SI:localuser:gdm
sudo su gdm -s /bin/bash #executar comandos abaixo como usuário GDM
$# gsettings set org.gnome.desktop.interface gtk-theme Materia-dark-compact
$# gsettings set org.gnome.desktop.interface icon-theme Papirus-Dark
$# gsettings set org.gnome.desktop.interface cursor-theme Breeze_Snow
```
### Terminal
```bash
sudo apt install -y fish undistract-me;
wget -c https://github.com/hbin/top-programming-fonts/raw/master/Monaco-Linux.ttf
mkdir -p ~/.fonts;cp -rv Monaco* ~/.fonts
gsettings set org.gnome.desktop.interface monospace-font-name 'Monaco Regular 11'
wget -c https://github.com/ryanoasis/nerd-fonts/releases/download/v2.0.0/DroidSansMono.zip
unzip DroidSansMono.zip -d ~/.fonts
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
sudo su #executar comandos abaixo como usuário root
$# curl -L https://get.oh-my.fish | fish
$# omf install bobthefish
$# exit
```
### AppImage Daemon
```bash
wget -c https://github.com/AppImage/appimaged/releases/download/continuous/appimaged_1-alpha-git05c4438.travis209_amd64.deb #update_link
sudo apt install -y ./appimaged*.deb;
```
### Crow Translate
```bash
wget -c https://github.com/crow-translate/crow-translate/releases/download/2.2.0/crow-translate-2.2.0-amd64.deb #update_link
sudo apt install -y ./crow-translate*.deb;
```
### Etcher
```bash
wget -c https://github.com/balena-io/etcher/releases/download/v1.5.56/balena-etcher-electron_1.5.56_amd64.deb #update_link
sudo apt install -y ./balena-etcher*.deb;
```
### GitHub Desktop
```bash
wget -c https://github.com/shiftkey/desktop/releases/download/release-2.1.0-linux1/GitHubDesktop-linux-2.1.0-linux1.deb #update_link
sudo apt install -y ./GitHubDesktop-linux*.deb;
```
### Google Chrome
```bash
wget -c https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install -y ./google-chrome*.deb;
```
### Insync
```bash
wget -c https://d2t3ff60b2tol4.cloudfront.net/builds/insync-nautilus_3.0.13.40201_all.deb #update_link
wget -c https://d2t3ff60b2tol4.cloudfront.net/builds/insync_3.0.15.40277-bionic_amd64.deb #update_link
sudo apt install -y ./insync*.deb;
```
### MEGA
```bash
wget -c https://mega.nz/linux/MEGAsync/xUbuntu_18.04/amd64/nautilus-megasync-xUbuntu_18.04_amd64.deb
wget -c https://mega.nz/linux/MEGAsync/xUbuntu_18.04/amd64/megasync-xUbuntu_18.04_amd64.deb
sudo apt install -y ./nautilus-megasync*.deb ./megasync*.deb;
```
### OCS URL
```bash
wget -c https:// #LINK_DO_OCS_URL
sudo apt install -y ./ocs-url*.deb;
```
## SpeedTest
```bash
sudo wget -O /usr/local/bin/speedtest-cli https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py
sudo chmod +x -v /usr/local/bin/speedtest-cli
```
### VirtualBox
```bash
wget -c https://download.virtualbox.org/virtualbox/6.0.12/virtualbox-6.0_6.0.12-133076~Ubuntu~bionic_amd64.deb
sudo apt install -y --no-install-recommends ./virtualbox*.deb;
```
### Webpin
```bash
wget -c https://launchpadlibrarian.net/440481065/libgranite-common_5.2.5+r1436+pkg110~ubuntu5.0.1_all.deb
wget -c https://launchpadlibrarian.net/440481067/libgranite5_5.2.5+r1436+pkg110~ubuntu5.0.1_amd64.deb
wget -c https:// #LINK_DO_WEBPIN
sudo apt install -y ./libgranite* ./com.github.artemanufrij.webpin*.deb;
```
### APT Apps
```bash
sudo add-apt-repository -yn ppa:mc3man/bionic-media # Media codecs
sudo add-apt-repository -yn ppa:xuzhen666/gnome-mpv # Celluloid
sudo add-apt-repository -yn ppa:mkusb/ppa # MKUSB
#sudo add-apt-repository -y ppa:atareao/telegram
sudo apt install -y --no-install-recommends gnome-mpv kpat mkusb;
gsettings set io.github.celluloid-player.Celluloid mpv-options --save-position-on-quit
echo 'StartupWMClass=kpat' | sudo tee -a /usr/share/applications/org.kde.kpat.desktop
sudo apt install -y caffeine deluge-gtk deluge-web deluged galculator gnome-alsamixer gnome-sushi gnome-usage hardinfo neofetch synaptic tilix; #telegram
sudo rm -rfv /usr/share/applications/caffeine.desktop /usr/share/applications/debian-*xterm.desktop /usr/share/applications/guidus.desktop
sudo sed -i 's/Icon=\/usr\/share\/pixmaps\/gnome-alsamixer\/gnome-alsamixer-icon.png/Icon=gnome-alsamixer-icon/g' /usr/share/applications/gnome-alsamixer.desktop
sudo sed -i 's/Icon=\/usr\/share\/pixmaps\/guvcview\/guvcview.png/Icon=guvcview/g' 2/usr/share/applications/guvcview.desktop
sudo sed -i 's/Icon=\/usr\/share\/hardinfo\/pixmaps\/logo.png/Icon=hardinfo/g' /usr/share/applications/hardinfo.desktop
sudo wget -cO /usr/local/bin/neofetch https://raw.githubusercontent.com/dylanaraps/neofetch/master/neofetch
sudo chmod +x -v /usr/local/bin/neofetch
```
### Gestures
```bash
sudo gpasswd -a $USER input
sudo apt install -y libinput-tools python3-setuptools wmctrl xdotool;
git clone https://github.com/bulletmark/libinput-gestures.git
cd libinput-gestures;sudo make install;cd ..
git clone https://gitlab.com/cunidev/gestures
cd gestures;sudo python3 setup.py install;cd ..
sudo sed -i 's/org.cunidev.gestures/libinput-gestures/g' /usr/share/applications/org.cunidev.gestures.desktop
sudo mv -v /usr/share/applications/libinput-gestures.desktop /etc/xdg/autostart/
```
### Flatpak
```bash
sudo apt install -y gnome-software-plugin-flatpak;
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
flatpak install flathub org.gtk.Gtk3theme.Materia-dark-compact
```
### FeedReader
```bash
flatpak install flathub org.gnome.FeedReader
```
### Remover Snaps
```bash
sudo snap remove gnome-3-28-1804 gnome-calculator gnome-characters gnome-logs gnome-system-monitor gtk-common-themes
sudo snap remove core18
```
### Hardcode-tray apply
```bash
sudo hardcode-tray --apply --size 24
```
