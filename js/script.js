function switchLanguage(lang) {
    const title = document.getElementById('header-h');
    const importantz = document.getElementById('importantz-command');
    const clear = document.getElementById('clear-command');
    const craft = document.getElementById('craft-command');
    const day = document.getElementById('day-command');
    const sethome = document.getElementById('sethome-command');
    const delhome = document.getElementById('delhome-command');
    const delwarp = document.getElementById('delwarp-command');
    const home = document.getElementById('home-command');
    const ec = document.getElementById("enderchest-command");
    const feed = document.getElementById("feed-command");
    const fly = document.getElementById("fly-command");
    const flyspeed = document.getElementById("flyspeed-command");
    const gm = document.getElementById("gm-command");
    const heal = document.getElementById("heal-command");
    const invsee = document.getElementById("invsee-command");
    const lightning = document.getElementById("lightning-command");
    const near = document.getElementById("near-command");
    const nick = document.getElementById("nick-command");
    const night = document.getElementById("night-command");
    const realname = document.getElementById("realname-command");
    const repair = document.getElementById("repair-command");
    const setspawn = document.getElementById("setspawn-command");
    const setwarp = document.getElementById("setwarp-command");
    const spawn = document.getElementById("spawn-command");
    const speed = document.getElementById("speed-command");
    const tpacancel = document.getElementById("tpacancel-command");
    const tpaccept = document.getElementById("tpaccept-command");
    const tpadeny = document.getElementById("tpadeny-command");
    const tpa = document.getElementById("tpa-command");
    const tp = document.getElementById("tp-command");
    const tphere = document.getElementById("tphere-command");
    const vanish = document.getElementById("vanish-command");
    const warp = document.getElementById("warp-command");

    switch (lang) {
        case 'en':
            title.textContent = 'Documentation';
            importantz.textContent = '/importantz - Main Plugin`s command';
            clear.textContent = '/clear - Clear Player`s inventory'
            craft.textContent = '/craft - Opens virtual crafting table'
            day.textContent = '/day - Setts day in world'
            delhome.textContent = '/delhome - Deletes a home point for the player'
            delwarp.textContent = '/delwarp - Deletes a warp'
            ec.textContent = '/enderchest - Opens Player`s ender chest';
            feed.textContent = '/feed - Feeds the player';
            fly.textContent = '/fly - Enable/Disable fly mode';
            flyspeed.textContent = '/flyspeed - Setts fly speed';
            gm.textContent = '/gm - Changes Player`s game mode';
            heal.textContent = '/heal - Heals Player';
            home.textContent = '/home - Teleports the player to a point at home'
            invsee.textContent = '/invsee - View Player`s inventory';
            lightning.textContent = '/lightning - To strike with lightning';
            near.textContent = '/near - View the list of players nearby';
            nick.textContent = '/nick - Changes Player`s nick';
            night.textContent = '/night - Setts night in world';
            realname.textContent = '/realname - View real Player`s name';
            repair.textContent = '/repair - Repairs item in Player`s hand';
            sethome.textContent = '/sethome - Creates a home point for the player'
            setspawn.textContent = '/setspawn - Creates a spawn point';
            setwarp.textContent = '/setwarp - Creates a warp';
            spawn.textContent = '/spawn - Teleports the player to a spawn point';
            speed.textContent = '/speed - Setts walk speed for Player';
            tpacancel.textContent = 'tpacancel - Cancels all not accepted teleportation requests';
            tpaccept.textContent = '/tpaccept - Accepts a teleportation request'
            tpadeny.textContent = '/tpadeny - Rejects teleportation request';
            tpa.textContent = '/tpa - Sends a teleportation request'
            tp.textContent = '/tp - Teleport to Player'
            tphere.textContent = '/tphere - Teleport Player to yourself'
            vanish.textContent = '/vanish - Makes Player invisible';
            warp.textContent = '/warp - Teleports Player to warp';
            break;
        case 'ru':
            title.textContent = 'Документация';
            importantz.textContent = '/importantz - Главная команда плагина'
            clear.textContent = '/clear - Очищает инвентарь игрока'
            craft.textContent = '/craft - Открывает виртуальный верстак'
            day.textContent = '/day - Устанавливает день в мире'
            delhome.textContent = '/delhome - Удаляет точку дома для игрока'
            delwarp.textContent = '/delwarp - Удаляет варп'
            ec.textContent = '/enderchest - Открывает эндер-сундук игрока';
            feed.textContent = '/feed - Кормит игрока';
            fly.textContent = '/fly - Включить/Выключить режим полета';
            flyspeed.textContent = '/flyspeed - Устанавливает скорость полета';
            gm.textContent = '/gm - Изменяет режим игры игрока';
            heal.textContent = '/heal - Лечит игрока';
            home.textContent = '/home - Телепортирует игрока в точку дома'
            invsee.textContent = '/invsee - Посмотреть инвентарь игрока'
            lightning.textContent = '/lightning - Ударить молнией'
            near.textContent = '/near - Посмотреть список игроков, находящихся рядом';
            nick.textContent = '/nick - Изменяет ник игрока';
            night.textContent = '/night - Устанавливает ночь в мире';
            realname.textContent = '/realname - Посмотреть настоящее имя игрока';
            repair.textContent = '/repair - Восстанавливает предмет в руке игрока';
            sethome.textContent = '/sethome - Создает точку дома для игрока'
            setspawn.textContent = '/setspawn - Создает точку спавна'
            setwarp.textContent = '/setwarp - Создает варп';
            spawn.textContent = '/spawn - Телепортирует игрока к точке спавна';
            speed.textContent = '/speed - Устанавливает скорость для игрока';
            tpacancel.textContent = '/tpacancel - Отменяет все непринятые запросы на телепортацию';
            tpaccept.textContent = '/tpaccept - Принимает запрос на телепортацию';
            tpadeny.textContent = '/tpadeny - Отклоняет запрос на телепортацию';
            tpa.textContent = '/tpa - Отправляет запрос на телепортацию';
            tp.textContent = '/tp - Телепортироваться к игроку';
            tphere.textContent = '/tphere - Телепортировать игрока к себе';
            vanish.textContent = '/vanish - Делает игрока невидимым';
            warp.textContent = '/warp - Телепортирует игрока на варп';
            break;
        default:
            break;
    }
}
