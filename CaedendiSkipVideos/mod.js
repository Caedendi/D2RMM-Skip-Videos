////===========================////
////===========================////
////                           ////
////   Skip Videos for D2RMM   ////
////          v1.0.0           ////
////                           ////
////===========================////
////===========================////

function removeLaunch() {
  D2RMM.copyFile(
    'launch_hd',        // <mod folder>\launch_hd
    'hd',               // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
    true                // overwrite any conflicts
  );
}

function removeCutscenes() {
  D2RMM.copyFile(
    'cutscenes_global', // <mod folder>\cutscenes_global
    'global',           // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\global
    true                // overwrite any conflicts
  );
  D2RMM.copyFile(
    'cutscenes_hd',     // <mod folder>\cutscenes_hd
    'hd',               // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\hd
    true                // overwrite any conflicts
  );
  D2RMM.copyFile(
    'cutscenes_local',  // <mod folder>\cutscenes_local
    'local',            // <diablo 2 folder>\mods\<modname>\<modname>.mpq\data\local
    true                // overwrite any conflicts
  );
}

function applyMod() {
  if (config.RemoveLaunch) {
    removeLaunch();
  }
  if (config.RemoveCutscenes) {
    removeCutscenes();
  }
}

applyMod();