(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };var element = document.getElementById("cf687390-b225-42b5-b360-b79e3581f9e5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'cf687390-b225-42b5-b360-b79e3581f9e5' but no matching script tag was found. ")
        return false;
      }
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.4.0.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.4.0.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"ebbd238e-080f-4876-8ba6-4e8fab8189b9":{"roots":{"references":[{"attributes":{"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93365","type":"MultiLine"},{"attributes":{"callback":null,"overlay":{"id":"93381","type":"BoxAnnotation"}},"id":"93329","type":"BoxSelectTool"},{"attributes":{},"id":"93386","type":"Selection"},{"attributes":{"source":{"id":"93354","type":"ColumnDataSource"}},"id":"93358","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93381","type":"BoxAnnotation"},{"attributes":{},"id":"93331","type":"UndoTool"},{"attributes":{},"id":"93387","type":"UnionRenderers"},{"attributes":{"callback":null,"overlay":{"id":"93382","type":"PolyAnnotation"}},"id":"93330","type":"LassoSelectTool"},{"attributes":{"below":[{"id":"93316","type":"LinearAxis"}],"center":[{"id":"93320","type":"Grid"},{"id":"93325","type":"Grid"}],"left":[{"id":"93321","type":"LinearAxis"}],"output_backend":"webgl","plot_height":240,"plot_width":720,"renderers":[{"id":"93352","type":"GlyphRenderer"},{"id":"93357","type":"GlyphRenderer"},{"id":"93362","type":"GlyphRenderer"},{"id":"93367","type":"GlyphRenderer"},{"id":"93372","type":"GlyphRenderer"},{"id":"93374","type":"Span"}],"title":{"id":"93376","type":"Title"},"toolbar":{"id":"93336","type":"Toolbar"},"x_range":{"id":"93308","type":"DataRange1d"},"x_scale":{"id":"93312","type":"LinearScale"},"y_range":{"id":"93310","type":"DataRange1d"},"y_scale":{"id":"93314","type":"LinearScale"}},"id":"93307","subtype":"Figure","type":"Plot"},{"attributes":{"source":{"id":"93369","type":"ColumnDataSource"}},"id":"93373","type":"CDSView"},{"attributes":{},"id":"93332","type":"RedoTool"},{"attributes":{},"id":"93379","type":"BasicTickFormatter"},{"attributes":{},"id":"93392","type":"Selection"},{"attributes":{},"id":"93314","type":"LinearScale"},{"attributes":{"axis_label":"Deviance","formatter":{"id":"93378","type":"BasicTickFormatter"},"ticker":{"id":"93317","type":"BasicTicker"}},"id":"93316","type":"LinearAxis"},{"attributes":{"data_source":{"id":"93359","type":"ColumnDataSource"},"glyph":{"id":"93360","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93361","type":"Circle"},"selection_glyph":null,"view":{"id":"93363","type":"CDSView"}},"id":"93362","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"93317","type":"BasicTicker"}},"id":"93320","type":"Grid"},{"attributes":{"data_source":{"id":"93364","type":"ColumnDataSource"},"glyph":{"id":"93365","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93366","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93368","type":"CDSView"}},"id":"93367","type":"GlyphRenderer"},{"attributes":{"source":{"id":"93349","type":"ColumnDataSource"}},"id":"93353","type":"CDSView"},{"attributes":{"data_source":{"id":"93349","type":"ColumnDataSource"},"glyph":{"id":"93350","type":"Triangle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93351","type":"Triangle"},"selection_glyph":null,"view":{"id":"93353","type":"CDSView"}},"id":"93352","type":"GlyphRenderer"},{"attributes":{},"id":"93328","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"93379","type":"BasicTickFormatter"},"major_label_overrides":{"-0.75":"","-1":"Centered 8 schools","0":"Non-centered 8 schools"},"ticker":{"id":"93347","type":"FixedTicker"}},"id":"93321","type":"LinearAxis"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93356","type":"MultiLine"},{"attributes":{"source":{"id":"93364","type":"ColumnDataSource"}},"id":"93368","type":"CDSView"},{"attributes":{"callback":null,"data":{"x":[59.6908040037226,59.712642429907305],"y":[0.0,-1.0]},"selected":{"id":"93392","type":"Selection"},"selection_policy":{"id":"93391","type":"UnionRenderers"}},"id":"93369","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"grey"},"line_color":{"value":"grey"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93350","type":"Triangle"},{"attributes":{"callback":null},"id":"93335","type":"HoverTool"},{"attributes":{"fill_color":{"value":null},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93360","type":"Circle"},{"attributes":{},"id":"93390","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"93382","type":"PolyAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93361","type":"Circle"},{"attributes":{},"id":"93384","type":"Selection"},{"attributes":{"data_source":{"id":"93369","type":"ColumnDataSource"},"glyph":{"id":"93370","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93371","type":"Circle"},"selection_glyph":null,"view":{"id":"93373","type":"CDSView"}},"id":"93372","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93351","type":"Triangle"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"93326","type":"PanTool"},{"id":"93327","type":"BoxZoomTool"},{"id":"93328","type":"WheelZoomTool"},{"id":"93329","type":"BoxSelectTool"},{"id":"93330","type":"LassoSelectTool"},{"id":"93331","type":"UndoTool"},{"id":"93332","type":"RedoTool"},{"id":"93333","type":"ResetTool"},{"id":"93334","type":"SaveTool"},{"id":"93335","type":"HoverTool"}]},"id":"93336","type":"Toolbar"},{"attributes":{},"id":"93312","type":"LinearScale"},{"attributes":{},"id":"93322","type":"BasicTicker"},{"attributes":{},"id":"93383","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"x":[61.5159539736469],"y":[-0.75]},"selected":{"id":"93384","type":"Selection"},"selection_policy":{"id":"93383","type":"UnionRenderers"}},"id":"93349","type":"ColumnDataSource"},{"attributes":{},"id":"93391","type":"UnionRenderers"},{"attributes":{"callback":null,"data":{"xs":[[58.601611709963,63.98248088019154],[58.9355153953296,64.0963925519642]],"ys":[[0.0,0.0],[-1.0,-1.0]]},"selected":{"id":"93390","type":"Selection"},"selection_policy":{"id":"93389","type":"UnionRenderers"}},"id":"93364","type":"ColumnDataSource"},{"attributes":{},"id":"93317","type":"BasicTicker"},{"attributes":{},"id":"93378","type":"BasicTickFormatter"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93371","type":"Circle"},{"attributes":{"callback":null,"data":{"x":[61.29204629507727,61.5159539736469],"y":[0.0,-1.0]},"selected":{"id":"93388","type":"Selection"},"selection_policy":{"id":"93387","type":"UnionRenderers"}},"id":"93359","type":"ColumnDataSource"},{"attributes":{"fill_color":{"value":"black"},"line_width":{"value":2},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"93370","type":"Circle"},{"attributes":{},"id":"93389","type":"UnionRenderers"},{"attributes":{"line_color":{"value":"grey"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93355","type":"MultiLine"},{"attributes":{"dimension":"height","line_color":{"value":"grey"},"line_dash":[6],"line_width":{"value":1.7677669529663689},"location":61.29204629507727},"id":"93374","type":"Span"},{"attributes":{},"id":"93385","type":"UnionRenderers"},{"attributes":{},"id":"93388","type":"Selection"},{"attributes":{},"id":"93326","type":"PanTool"},{"attributes":{},"id":"93333","type":"ResetTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"93380","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"xs":[[61.360479636844296,61.67142831044951]],"ys":[[-0.75,-0.75]]},"selected":{"id":"93386","type":"Selection"},"selection_policy":{"id":"93385","type":"UnionRenderers"}},"id":"93354","type":"ColumnDataSource"},{"attributes":{},"id":"93334","type":"SaveTool"},{"attributes":{"callback":null},"id":"93308","type":"DataRange1d"},{"attributes":{"overlay":{"id":"93380","type":"BoxAnnotation"}},"id":"93327","type":"BoxZoomTool"},{"attributes":{"text":""},"id":"93376","type":"Title"},{"attributes":{"ticks":[0.0,-0.75,-1.0]},"id":"93347","type":"FixedTicker"},{"attributes":{"callback":null,"end":0.5,"start":-1.5},"id":"93310","type":"DataRange1d"},{"attributes":{"source":{"id":"93359","type":"ColumnDataSource"}},"id":"93363","type":"CDSView"},{"attributes":{"data_source":{"id":"93354","type":"ColumnDataSource"},"glyph":{"id":"93355","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"93356","type":"MultiLine"},"selection_glyph":null,"view":{"id":"93358","type":"CDSView"}},"id":"93357","type":"GlyphRenderer"},{"attributes":{"dimension":1,"ticker":{"id":"93322","type":"BasicTicker"}},"id":"93325","type":"Grid"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"93366","type":"MultiLine"}],"root_ids":["93307"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"ebbd238e-080f-4876-8ba6-4e8fab8189b9","roots":{"93307":"cf687390-b225-42b5-b360-b79e3581f9e5"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();