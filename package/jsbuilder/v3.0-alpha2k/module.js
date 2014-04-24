var module = {"info": [
    {"name": "core-webgl", "size": "42KB", "checked": 0, "rule": ["core", "core-extensions"], "info": "Cocos2d WebGL support"},
    {"name": "core-extensions", "size": "56KB", "checked": 0, "rule": ["core"], "info": "Cocos2d Core extensions"},
    {"name": "core", "size": "226KB", "checked": 0, "rule": [], "info": "Cocos2d engine core"},
    {"name": 'webgl', "size": 'Unknow', "checked": 0, "rule": ['core', 'core-webgl', 'core-extensions', 'kazmath', 'shaders'], "info": 'Cocos2d WebGL renderers.'},
    {"name": "debugger", "size": "16KB", "checked": 0, "rule": ["core"], "info": "Debugging node"},
    {"name": "actions", "size": "52KB", "checked": 0, "rule": ["core"], "info": "Actions for user "},
    {"name": "labels", "size": "19KB", "checked": 0, "rule": ["core"], "info": "Label nodes including LabelTTF, LabelBMFont, LabelAtlas."},
    {"name": "audio", "size": "13KB", "checked": 0, "rule": ["core"], "info": "Audio system."},
    {"name": "menus", "size": "19KB", "checked": 0, "rule": ["core", "actions"], "info": "Menu and MenuItem nodes for creating game menu."},
    {"name": "transitions", "size": "23KB", "checked": 0, "rule": ["core", "actions", "render-texture", "progress-timer"], "info": "Scene transition effects"},
    {"name": "ccui", "size": "177KB", "checked": 0, "rule": ["core", "gui", "actions", "labels", "text-input", "clipping-nodes"], "info": "Cocos UI widget."},
    {"name": "shape-nodes", "size": "16KB", "checked": 0, "rule": ["core"], "info": "DrawNode can be used to render lines, polygons, curves, etc."},
    {"name": "clipping-nodes", "size": "5KB", "checked": 0, "rule": ["core", "shape-nodes"], "info": "ClippingNode can clip hosted nodes with shape or texture as stencil."},
    {"name": "particle", "size": "65KB", "checked": 0, "rule": ["core", "compression"], "info": "ParticleSystem node and built in particle effects."},
    {"name": "progress-timer", "size": "14KB", "checked": 0, "rule": ["core", "actions"], "info": "Progress timer"},
    {"name": "actions3d", "size": "22KB", "checked": 0, "rule": ["core","webgl", "core-webgl", "kazmath", "shaders", "actions", "effects", "render-texture"], "info": "Effects that can be applied to nodes, like page turn, shake, wave, etc"},
    {"name": "tilemap", "size": "34KB", "checked": 0, "rule": ["core", "compression"], "info": "TMX file parser and tile map "},
    {"name": "parallax", "size": "1KB", "checked": 0, "rule": ["core"], "info": "Parallax layers"},
    {"name": "render-texture", "size": "10KB", "checked": 0, "rule": ["core"], "info": "RenderTexture node for custom rendering motion-streak."},
    {"name": "text-input", "size": "9KB", "checked": 0, "rule": ["core"], "info": "Text input node."},
    {"name": "gui", "size": "92KB", "checked": 0, "rule": ["core", "clipping-nodes", "render-texture", "actions", "progress-timer"], "info": "Another GUI extension with a set of useful widgets, like ScrollView, TableView, Scale9Sprite"},
    {"name": "editbox", "size": "15KB", "checked": 0, "rule": ["core", "gui"], "info": "Edit Box"},
    {"name": "cocostudio", "size": "136KB", "checked": 0, "rule": ["core", "tilemap", "particle", "shape-nodes", "ccui"], "info": "The reader of CocoStudio."},
    {"name": "ccbreader", "size": "68KB", "checked": 0, "rule": ["core", "audio", "gui", "menus", "particle", "actions", "labels"], "info": "The reader of CocosBuilder"},
    {"name": "box2d", "size": "222KB", "checked": 0, "rule": ["core", "physics"], "info": "Box2d physics lib"},
    {"name": "chipmunk", "size": "55KB", "checked": 0, "rule": ["core", "physics"], "info": "Chipmunk physics lib"},
    {"name": "socketio", "size": "44KB", "checked": 0, "rule": [], "info": "ScoketIO"},
    {"name": "pluginx", "size": "15KB", "checked": 0, "rule": ["core"], "info": "Plugin-X"},
    {"name": "motion-streak", "size": "6KB", "checked": 0, "rule": ["core", "webgl", "core-webgl", "shaders", "kazmath", "labels"], "info": "Motion-streak effect"},

    {"name": "kazmath", "size": "30KB", "checked": 0, "rule": ["core"], "info": "Math lib for webgl"},
    {"name": "shaders", "size": "24KB", "checked": 0, "rule": ["core", "kazmath"], "info": "Shaders"},
    {"name": "node-grid", "size": "1KB", "checked": 0, "rule": ["core"], "info": "Base node of effects"},
    {"name": "effects", "size": "12KB", "checked": 0, "rule": ["core", "node-grid"], "info": "Some effects"},
    {"name": "compression", "size": "31KB", "checked": 0, "rule": ["core"], "info": "Compression of tilemap and particle"},
    {"name": "physics", "size": "5KB", "checked": 0, "rule": ["core", "shape-nodes"], "info": "Physics node for Box2d and Chipmunk"},
]};

var hiddenList = {
    'core-webgl': 1,
    'core-extensions': 1,
    'kazmath': 1,
    'shaders': 1,
    'node-grid': 1,
    'compression': 1,
    'effects': 1,
    'physics': 1
};