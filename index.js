import Zepto from "./src/zepto"
import zepto_assets from "./src/assets"
import zepto_callback from "./src/callbacks"
import zepto_data from "./src/data"
import zepto_deferred from "./src/deferred"
import zepto_detect from "./src/detect"
import zepto_event from "./src/event"
import zepto_fx_methods from "./src/fx_methods"
import zepto_fx from "./src/fx"
import zepto_gesture from "./src/gesture"
import zepto_ie from "./src/ie"
import zepto_selector from "./src/selector"
import zepto_stack from "./src/stack"
import zepto_touch from "./src/touch"
function init($){
    zepto_assets($)
    zepto_callback($)
    zepto_data($)
    zepto_deferred($)
    zepto_detect($)
    zepto_event($)
    zepto_fx_methods($)
    zepto_fx($)
    zepto_gesture($)
    zepto_ie($)
    zepto_selector($)
    zepto_stack($)
    zepto_touch($)
    return $;
}
var  zepto  = init(Zepto)


export {zepto,zepto as $}