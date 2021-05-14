import Zepto from "./src/zepto.js"
import zepto_assets from "./src/assets"
import zepto_callback from "./src/callbacks"
import zepto_data from "./src/data.js"
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


zepto_assets(Zepto)
zepto_callback(Zepto)
zepto_data(Zepto)
zepto_deferred(Zepto)
zepto_detect(Zepto)
zepto_event(Zepto)
zepto_fx_methods(Zepto)
zepto_fx(Zepto)
zepto_gesture(Zepto)
zepto_ie(Zepto)
zepto_selector(Zepto)
zepto_stack(Zepto)
zepto_touch(Zepto)

export {Zepto,Zepto as $}