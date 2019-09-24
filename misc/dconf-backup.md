### Backup
```bash
dconf dump /org/gnome/desktop/background/ > background.cfg
dconf dump /org/gnome/shell/extensions/ > extensions.cfg
```
### Restore
```bash
dconf load /org/gnome/desktop/background/ < background.cfg
dconf load /org/gnome/shell/extensions/ < extensions.cfg
```
