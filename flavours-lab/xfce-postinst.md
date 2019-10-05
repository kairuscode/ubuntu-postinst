### Repositórios
```bash
sudo add-apt-repository -y ppa:xuzhen666/dockbarx
```
### Aparência e usabilidade
```bash
sudo apt install -y mugshot menulibre redshift-gtk xfce4-dockbarx-plugin xfce4-notifyd xfce4-panel xfce4-power-manager xfce4-screenshooter xfce4-session xfce4-settings xfce4-whiskermenu-plugin xfwm4 xserver-xorg-input-synaptics-hwe-18.04
sudo apt autoremove --purge -y dockbarx-applet* indicator* thunar*
git clone https://github.com/rauldipeas/ubuntu-postinst
cp -rfv ubuntu-postinst/flavours-lab/XFCE/gconf ~/.gconf
cp -rfv ubuntu-postinst/flavours-lab/XFCE/volumeicon ~/.config/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/xfce4 ~/.config/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/compiz ~/.config/
```
### Compiz Reloaded
```bash
wget -q http://download.tuxfamily.org/compiz/apt/key.pub -O- | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/compiz-reloaded.gpg
echo "deb http://download.tuxfamily.org/compiz/debian stretch main" | sudo tee /etc/apt/sources.list.d/compiz-reloaded.list
sudo apt update
sudo apt install -y \
 compizconfig-settings-manager \
 compiz-reloaded-core \
 compiz-reloaded-gtk \
 compiz-reloaded-plugins \
 compiz-reloaded-plugins-experimental \
 compiz-reloaded plugins-extra \
 compiz-reloaded-plugins-main \
 libcompizconfig-reloaded-0 \
 libdecoration-reloaded-0 \
 python-compizconfig-reloaded
mkdir -pv ~/.config/autostart
cp -rfv /usr/share/applications/compiz.desktop ~/.config/autostart/
```
### Conky
```bash
wget -c https://github.com/teejee2008/conky-manager/releases/download/v2.4/conky-manager-v2.4-amd64.deb
wget -c http://launchpadlibrarian.net/340091846/realpath_8.26-3ubuntu4_all.deb
sudo apt install -y conky-all ./conky-manager*.deb ./realpath*.deb
```
### Natural scrolling
```bash
echo '#!/bin/bash
synclient VertScrollDelta=-58
synclient HorizScrollDelta=-58' | sudo tee /usr/local/bin/naturalscrolling
sudo chmod -v +x /usr/local/bin/naturalscrolling
mkdir -p ~/.config/autostart
echo '[Desktop Entry]
Encoding=UTF-8
Version=0.9.4
Type=Application
Name=NaturalScrolling
Exec=naturalscrolling
OnlyShowIn=XFCE;
StartupNotify=false
Terminal=false
Hidden=false
Icon=mouse' > ~/.config/autostart/naturalscrolling.desktop
```
### Palm detection
```bash
echo '#!/bin/bash
syndaemon -i 0.1 -KRd' | sudo tee /usr/local/bin/palmdetection
sudo chmod -v +x /usr/local/bin/palmdetection
mkdir -p ~/.config/autostart
echo '[Desktop Entry]
Encoding=UTF-8
Version=0.9.4
Type=Application
Name=PalmDetection
Exec=palmdetection
OnlyShowIn=XFCE;
StartupNotify=false
Terminal=false
Hidden=false
Icon=mouse' > ~/.config/autostart/palmdetection.desktop
```
### Volume icon
```bash
sudo apt install -y volumeicon-alsa
mkdir -p ~/.config/autostart
echo '[Desktop Entry]
Type=Application
Name=Volume Icon
Exec=volumeicon
NoDisplay=false
OnlyShowIn=XFCE;' > ~/.config/autostart/volumeicon.desktop
```
### XCAPE
```bash
sudo apt install -y xcape
mkdir -p ~/.config/autostart
echo '[Desktop Entry]
Exec=xcape -e "Super_L=Super_L|Escape"
Name=Xcape
Type=Application
OnlyShowIn=XFCE;' > ~/.config/autostart/xcape.desktop
```
### XFCE panel auto opaque
```bash
sudo wget -cO /usr/local/bin/xfce4-panel-auto-opaque https://gist.githubusercontent.com/5310/1033619bd0c9a14a53c4c3fec82a903a/raw/ea0880927a13e7c2ea128312accc2e90c6d75a01/xfce4-panel-auto-opaque.sh
sudo sed -i 's/transparent_alpha=0/transparent_alpha=30/g' /usr/local/bin/xfce4-panel-auto-opaque
sudo chmod -v +x /usr/local/bin/xfce4-panel-auto-opaque
mkdir -p ~/.config/autostart
echo '[Desktop Entry]
Encoding=UTF-8
Version=0.9.4
Type=Application
Name=XFCE panel auto opaque
Exec=xfce4-panel-auto-opaque
OnlyShowIn=XFCE;
StartupNotify=false
Terminal=false
Hidden=false
Icon=xfce4-panel' > ~/.config/autostart/xfce4-panel-auto-opaque.desktop
```
