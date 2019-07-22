$.lang.register('customcommands.add.error', 'el comando ya existe');
$.lang.register('customcommands.add.success', 'el comando !$1 ha sido creado!');
$.lang.register('customcommands.add.usage', 'uso: !addcom (comando) (message)');
$.lang.register('customcommands.add.commandtag.notfirst', '(comando) tag must be the start of a custom command when used.');
$.lang.register('customcommands.add.commandtag.invalid', '(comando) tag command does not exist: $1');
$.lang.register('customcommands.alias.delete.error.alias.404', 'El alias no existe: !$1');
$.lang.register('customcommands.alias.delete.success', 'el alias !$1 se eliminado exitosamente!');
$.lang.register('customcommands.alias.delete.usage', 'uso: !delalias (nombre de alias)');
$.lang.register('customcommands.alias.error', 'Ya existe alias para !$1. Primero elimínalo.');
$.lang.register('customcommands.alias.error.target404', 'El comando objetivo no existe!');
$.lang.register('customcommands.add.disable', 'Actualmente está deshabilitado ese comando. Elimínalo para agregar uno nuevo o reactívalo.');
$.lang.register('customcommands.alias.success', 'the command !$1 was successfully aliased to !$2');
$.lang.register('customcommands.alias.usage', 'uso: !aliascom (nombre de alias) (comando existente) [parámetros opcionales]');
$.lang.register('customcommands.delete.success', 'El comando !$1 ha sido eliminado!');
$.lang.register('customcommands.delete.usage', 'uso: !delcom (comando)');
$.lang.register('customcommands.edit.404', 'no puedes sobreescribir un comando default.');
$.lang.register('customcommands.set.perm.error.target404', 'el comando !$1 no existe!');
$.lang.register('customcommands.set.perm.success', 'permisos para el comando: $1 configurados para grupo: $2 y superior.');
$.lang.register('customcommands.set.perm.unset.success', 'All recursive permissions for the command: $1 and any of its aliases have been removed.');
$.lang.register('customcommands.set.perm.usage', 'uso: !permcom (nombre del comando) (group id/name). Restricts uso of a command to viewers with a certain permission level.');
$.lang.register('customcommands.set.perm.404', 'El comando no parece existir: $1');
$.lang.register('customcommands.set.price.error.404', 'Por favor selecciona un comando que exista y que esté disponible para no-mods.');
$.lang.register('customcommands.set.price.error.invalid', 'Por favor introduce un precio válido, 0 o más.');
$.lang.register('customcommands.set.price.success', 'El precio de !$1 ha sido configurado a $2 $3.');
$.lang.register('customcommands.set.price.usage', 'uso: !pricecom (comando) [subcomando] [subaction] (precio). Opcional: subcomando y subaction');
$.lang.register('customcommands.set.pay.error.404', 'Por favor selecciona un comando que exista y que esté disponible a no-mods.');
$.lang.register('customcommands.set.pay.error.invalid', 'Por favor selecciona un pago válido, 0 o más.');
$.lang.register('customcommands.set.pay.success', 'El pago para !$1 ha sido configurado a $2 $3.');
$.lang.register('customcommands.set.pay.usage', 'uso: !paycom (comando) (precio)');
$.lang.register('customcommands.404.no.commands', 'No hay comandos propios, agrega uno con !addcom');
$.lang.register('customcommands.cmds', 'Comandos propios: $1');
$.lang.register('customcommands.edit.usage', 'uso: !editcom (comando) (mensaje)');
$.lang.register('customcommands.edit.success', 'El comando !$1 ha sido editado!');
$.lang.register('customcommands.touser.offline', 'Lo siento, parece que $1 está offline!');
$.lang.register('customcommands.customapi.404', 'El comando !$1 require parámetros.');
$.lang.register('customcommands.customapijson.err', '!$1: Ocurrió un error al procesar la API.');
$.lang.register('customcommands.disable.usage', 'uso: !disablecom (comando)');
$.lang.register('customcommands.disable.404', 'el comando no existe.');
$.lang.register('customcommands.disable.err', 'el comando ya está deshabilitado.');
$.lang.register('customcommands.disable.success', 'el comando !$1 ha sido deshabilitado.');
$.lang.register('customcommands.enable.usage', 'uso: !enablecom (comando)');
$.lang.register('customcommands.enable.404', 'el comando no existe.');
$.lang.register('customcommands.enable.err', 'el comando no está deshabilitado.');
$.lang.register('customcommands.enable.success', 'el comando !$1 ha sido re-habilitado.');
$.lang.register('customcommands.botcommands', 'Comandos: $1');
$.lang.register('customcommands.botcommands.error', 'Pon un número para encontrar la página.');
$.lang.register('customcommands.botcommands.total', 'Páginas Totales: $1 [Ve también: https://phantombot.tv/commands]');