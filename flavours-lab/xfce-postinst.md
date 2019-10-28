### Repositórios
```bash
sudo add-apt-repository -y ppa:unit193/xfce
sudo add-apt-repository -y ppa:xuzhen666/dockbarx
```
### Aparência e usabilidade
```bash
sudo apt install -y gtk3-nocsd menulibre mugshot redshift-gtk thunar xfce4-appmenu-plugin xfce4-dockbarx-plugin xfce4-notifyd xfce4-panel xfce4-power-manager xfce4-session xfce4-settings xfce4-whiskermenu-plugin xfdesktop xfpanel-switch xfwm4 xscreensaver xserver-xorg-input-synaptics-hwe-18.04
sudo apt autoremove --purge -y dockbarx-applet* indicator* xubuntu*
sudo rm -rfv /usr/share/xfpanel-switch/layouts/*
git clone https://github.com/rauldipeas/ubuntu-postinst
git clone https://github.com/Xseba360/DockBarX-Windows10.git;cd DockBarX-Windows10;sudo ./install.sh
gconftool --load ubuntu-postinst/flavours-lab/XFCE/dockbarx.xml
mkdir -pv ~/.config ~/.local/share
cp -rfv ubuntu-postinst/flavours-lab/XFCE/compton.conf ~/.config/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/rofi ~/.config/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/skippy-xd ~/.config/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/volumeicon ~/.config/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/xfce4 ~/.config/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/xfpanel-switch ~/.local/share/
mkdir -pv ~/Imagens/Wallpapers/
cp -rfv ubuntu-postinst/flavours-lab/XFCE/wallpapers/* ~/Imagens/Wallpapers/
echo 'DPkg::Post-Invoke {"rm -rfv /usr/share/applications/*thunar* /usr/share/applications/*Thunar*";};' | sudo tee /etc/apt/apt.conf.d/100thunar
```
### Compiz Reloaded (removido)
```bash
#wget -nv https://download.opensuse.org/repositories/home:stevenpusser:compiz-reloaded-rebuilds/Debian_Testing/Release.key -O Release.key
#sudo apt-key add - < Release.key
#sudo sh -c "echo 'deb http://download.opensuse.org/repositories/home:/stevenpusser:/compiz-reloaded-rebuilds/xUbuntu_17.10/ /' > /etc/apt/sources.list.d/home:stevenpusser:compiz-reloaded-rebuilds.list"
#sudo apt update
#sudo apt install -y \
# compizconfig-settings-manager \
# compiz-reloaded-core \
# compiz-reloaded-gtk \
# compiz-reloaded-plugins \
# compiz-reloaded-plugins-experimental \
# compiz-reloaded plugins-extra \
# compiz-reloaded-plugins-main \
# libcompizconfig-reloaded-0 \
# libdecoration-reloaded-0 \
# python-compizconfig-reloaded
#mkdir -pv ~/.config/autostart
#cp -rfv /usr/share/applications/compiz-start.desktop ~/.config/autostart/
#sed -i 's/compiz ccp --replace/sh -c \"sleep 3;compiz ccp --replace\"/g' .config/autostart/compiz-start.desktop
```
### Compton
```bash
git clone https://github.com/tryone144/compton;cd compton
sudo apt install -y libx11-dev libxcomposite-dev libxdamage-dev libxrender-dev libxrandr-dev libxinerama-dev libconfig-dev libdbus-1-dev libdrm-dev libgl1-mesa-dev libpcre3-dev
make;sudo make install
sudo apt autoremove --purge -y libpthread-stubs0-dev libx11-dev libx11-doc libxau-dev libxcb1-dev libxdmcp-dev x11proto-core-dev x11proto-dev xorg-sgml-doctools xtrans-dev libxcomposite-dev libxext-dev libxfixes-dev x11proto-composite-dev x11proto-fixes-dev x11proto-xext-dev libxdamage-dev x11proto-damage-dev libxrender-dev libxrandr-dev x11proto-randr-dev libxinerama-dev x11proto-xinerama-dev libconfig-dev libconfig-doc libdbus-1-dev libdrm-dev libgl1-mesa-dev libgles1 libglvnd-core-dev libglvnd-dev libopengl0 libx11-xcb-dev libxcb-dri2-0-dev libxcb-dri3-dev libxcb-glx0-dev libxcb-present-dev libxcb-randr0-dev libxcb-render0-dev libxcb-shape0-dev libxcb-sync-dev libxcb-xfixes0-dev libxshmfence-dev libxxf86vm-dev mesa-common-dev x11proto-xf86vidmode-dev libpcre16-3 libpcre3-dev libpcre32-3 libpcrecpp0v5 asciidoc asciidoc-base asciidoc-common libxml2-utils xsltproc
cp /usr/share/applications/compton.desktop ~/.config/autostart/
echo 'OnlyShowIn=XFCE;' | tee -a ~/.config/autostart/compton.desktop
sed -i 's/TryExec/#TryExec/g' ~/.config/autostart/compton.desktop
```
### Conky
```bash
wget -c https://github.com/teejee2008/conky-manager/releases/download/v2.4/conky-manager-v2.4-amd64.deb
wget -c http://launchpadlibrarian.net/340091846/realpath_8.26-3ubuntu4_all.deb
sudo apt install -y conky-all ./conky-manager*.deb ./realpath*.deb
```
### QMenu HUD
```bash
git clone https://github.com/tetzank/qmenu_hud;cd qmenu_hud
mkdir build;cd build
sudo apt install -y cmake qtbase5-dev libdbusmenu-qt5-dev suckless-tools
cmake ..
make
sudo make install
sudo apt autoremove --purge -y cmake cmake-data libjsoncpp1 librhash0 libdrm-dev libegl1-mesa-dev libgl1-mesa-dev libgles1 libgles2-mesa-dev libglu1-mesa-dev libglvnd-core-dev libglvnd-dev libopengl0 libpthread-stubs0-dev libqt5concurrent5 libqt5opengl5-dev libwayland-bin libwayland-dev libx11-dev libx11-doc libx11-xcb-dev libxau-dev libxcb-dri2-0-dev libxcb-dri3-dev libxcb-glx0-dev libxcb-present-dev libxcb-randr0-dev libxcb-render0-dev libxcb-shape0-dev libxcb-sync-dev libxcb-xfixes0-dev libxcb1-dev libxdamage-dev libxdmcp-dev libxext-dev libxfixes-dev libxshmfence-dev libxxf86vm-dev mesa-common-dev qt5-qmake qt5-qmake-bin qtbase5-dev qtbase5-dev-tools x11proto-core-dev x11proto-damage-dev x11proto-dev x11proto-fixes-dev x11proto-xext-dev x11proto-xf86vidmode-dev xorg-sgml-doctools xtrans-dev libdbusmenu-qt5-dev
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
### OBLogout
```bash
wget -c https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/oblogout.mo
wget -c https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/oblogout_0.2-0-0ubuntu1_all.deb
wget -c https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/python-central_0.6.17_all.deb
wget -c https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/python-imaging_3.1.2-0ubuntu1.1_all.deb
sudo apt install -y ./oblogout_0.2-0-0ubuntu1_all.deb ./python-central_0.6.17_all.deb ./python-imaging_3.1.2-0ubuntu1.1_all.deb
git clone https://github.com/bruhensant/Adeos-Oblogout
sudo cp -rfv Adeos-Oblogout/adeos-cores /usr/share/themes/
sudo cp -rfv oblogout.mo /usr/share/locale/pt_BR/LC_MESSAGES/oblogout.mo
sudo sed -i 's/openbox --exit/\/usr\/bin\/xfce4-session-logout -l -f/g' /usr/share/pyshared/oblogout/__init__.py
echo '#!/bin/bash
xfce4-panel -q
oblogout
xfce4-panel' | sudo tee /usr/local/bin/xfce4-session-logout;sudo chmod +x -v /usr/local/bin/xfce4-session-logout
echo '[settings]
usehal = false

[looks]
opacity = 70
bgcolor = black
buttontheme = adeos-cores
buttons = cancel, logout, restart, shutdown

[shortcuts]
cancel = Escape
shutdown = S
restart = R
logout = L

[commands]
shutdown = shutdown -h now
restart = reboot
logout = /usr/bin/xfce4-session-logout -l -f' | sudo tee /etc/oblogout.conf
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
### Rofi
```bash
git clone https://github.com/davatorium/rofi;cd rofi
sudo apt install -y autoconf automake autopoint bison debhelper dh-autoreconf dh-strip-nondeterminism flex gir1.2-harfbuzz-0.0 icu-devtools libbison-dev libcairo-script-interpreter2 libcairo2-dev libfile-stripnondeterminism-perl libgdk-pixbuf2.0-dev libgraphite2-dev libharfbuzz-dev libharfbuzz-gobject0 libice-dev libicu-dev libicu-le-hb-dev libicu-le-hb0 libiculx60 libpango1.0-dev libpixman-1-dev libpthread-stubs0-dev librsvg2-dev libsm-dev libstartup-notification0-dev libx11-dev libxau-dev libxcb-ewmh-dev libxcb-icccm4-dev libxcb-randr0-dev libxcb-render0-dev libxcb-shm0-dev libxcb-util-dev libxcb-util0-dev libxcb-xinerama0-dev libxcb-xkb-dev libxcb-xrm-dev libxcb1-dev libxdmcp-dev libxext-dev libxft-dev libxkbcommon-dev libxkbcommon-x11-dev libxrender-dev m4 po-debconf texinfo x11proto-core-dev x11proto-dev x11proto-xext-dev xorg-sgml-doctools xtrans-dev
git clone https://github.com/libcheck/check;cd check
autoreconf -i;./configure;make;sudo make install; cd ..
git submodule update --init;autoreconf -i
./configure;make;sudo make install
sudo apt autoremove --purge autoconf automake autopoint bison debhelper dh-autoreconf dh-strip-nondeterminism flex gir1.2-harfbuzz-0.0 icu-devtools libbison-dev libcairo-script-interpreter2 libcairo2-dev libfile-stripnondeterminism-perl libgdk-pixbuf2.0-dev libgraphite2-dev libharfbuzz-dev libharfbuzz-gobject0 libice-dev libicu-dev libicu-le-hb-dev libicu-le-hb0 libiculx60 libpango1.0-dev libpixman-1-dev libpthread-stubs0-dev librsvg2-dev libsm-dev libstartup-notification0-dev libx11-dev libxau-dev libxcb-ewmh-dev libxcb-icccm4-dev libxcb-randr0-dev libxcb-render0-dev libxcb-shm0-dev libxcb-util-dev libxcb-util0-dev libxcb-xinerama0-dev libxcb-xkb-dev libxcb-xrm-dev libxcb1-dev libxdmcp-dev libxext-dev libxft-dev libxkbcommon-dev libxkbcommon-x11-dev libxrender-dev m4 po-debconf x11proto-core-dev x11proto-dev x11proto-xext-dev xorg-sgml-doctools xtrans-dev libtext-unidecode-perl tex-common texinfo
sudo apt install -y libxcb-ewmh2 libxcb-xrm0
```
### Skippy-XD
```bash
wget -c https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/skippy-xd_0.5.2~pre-ubuntu18.04.1_amd64.deb
wget -c https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/libpng12-0_1.2.54-1ubuntu1.1_amd64.deb
sudo apt install -y ./skippy*.deb ./libpng12-0*.deb
sudo wget -c -O /usr/local/bin/skippy-xd-fix https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/skippy-xd-fix
sudo chmod +x -v /usr/local/bin/skippy-xd-fix
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
### WindowCK
```bash
wget -c https://github.com/rauldipeas/ubuntu-postinst/raw/master/resources/xfce4-windowck-plugin_0.4.5_amd64.deb
sudo apt install -y ./xfce4-windowck-plugin*.deb
```
### XCAPE
```bash
sudo apt install -y xcape
mkdir -p ~/.config/autostart
echo "[Desktop Entry]
Exec=sh -c \"xcape -e 'Super_L=Super_L|a';xcape -e '#108=Super_L|Alt_L|Escape'\"
Name=Xcape
Type=Application
OnlyShowIn=XFCE;" > ~/.config/autostart/xcape.desktop
```
### XFCE panel auto opaque
```bash
sudo apt install -y wmctrl
sudo wget -cO /usr/local/bin/xfce4-panel-auto-opaque https://gist.githubusercontent.com/5310/1033619bd0c9a14a53c4c3fec82a903a/raw/ea0880927a13e7c2ea128312accc2e90c6d75a01/xfce4-panel-auto-opaque.sh
sudo sed -i 's/transparent_alpha=0/transparent_alpha=30/g' /usr/local/bin/xfce4-panel-auto-opaque
sudo sed -i 's/panels -l/panels\/panel-1 -l/g' /usr/local/bin/xfce4-panel-auto-opaque
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
### Hardcode-tray apply (XFCE)
```bash
sudo rm -rfv ~/.config/Hardcode-tray
sudo hardcode-tray --apply --size 24
```
