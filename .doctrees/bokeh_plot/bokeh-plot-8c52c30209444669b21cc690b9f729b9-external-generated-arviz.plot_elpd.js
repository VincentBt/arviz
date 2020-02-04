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
      };var element = document.getElementById("f8404b0c-c06e-4c1d-894a-58532b71ac2b");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f8404b0c-c06e-4c1d-894a-58532b71ac2b' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"f5943846-9c1a-4be8-b9fc-524bf5289194":{"roots":{"references":[{"attributes":{"text":"centered model - non centered model"},"id":"119627","type":"Title"},{"attributes":{"callback":null},"id":"119610","type":"HoverTool"},{"attributes":{"source":{"id":"119622","type":"ColumnDataSource"}},"id":"119626","type":"CDSView"},{"attributes":{},"id":"119589","type":"LinearScale"},{"attributes":{"callback":null},"id":"119583","type":"DataRange1d"},{"attributes":{},"id":"119631","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119623","type":"Cross"},{"attributes":{},"id":"119633","type":"BasicTickFormatter"},{"attributes":{"callback":null,"overlay":{"id":"119635","type":"BoxAnnotation"}},"id":"119604","type":"BoxSelectTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"119638","type":"Selection"},"selection_policy":{"id":"119637","type":"UnionRenderers"}},"id":"119622","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119634","type":"BoxAnnotation"},{"attributes":{"dimension":1,"ticker":{"id":"119597","type":"BasicTicker"}},"id":"119600","type":"Grid"},{"attributes":{},"id":"119603","type":"WheelZoomTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"119635","type":"BoxAnnotation"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"119601","type":"PanTool"},{"id":"119602","type":"BoxZoomTool"},{"id":"119603","type":"WheelZoomTool"},{"id":"119604","type":"BoxSelectTool"},{"id":"119605","type":"LassoSelectTool"},{"id":"119606","type":"UndoTool"},{"id":"119607","type":"RedoTool"},{"id":"119608","type":"ResetTool"},{"id":"119609","type":"SaveTool"},{"id":"119610","type":"HoverTool"}]},"id":"119611","type":"Toolbar"},{"attributes":{},"id":"119606","type":"UndoTool"},{"attributes":{},"id":"119607","type":"RedoTool"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"119636","type":"PolyAnnotation"},{"attributes":{"callback":null,"overlay":{"id":"119636","type":"PolyAnnotation"}},"id":"119605","type":"LassoSelectTool"},{"attributes":{"overlay":{"id":"119634","type":"BoxAnnotation"}},"id":"119602","type":"BoxZoomTool"},{"attributes":{"formatter":{"id":"119631","type":"BasicTickFormatter"},"ticker":{"id":"119592","type":"BasicTicker"}},"id":"119591","type":"LinearAxis"},{"attributes":{"ticker":{"id":"119592","type":"BasicTicker"}},"id":"119595","type":"Grid"},{"attributes":{},"id":"119637","type":"UnionRenderers"},{"attributes":{},"id":"119638","type":"Selection"},{"attributes":{},"id":"119601","type":"PanTool"},{"attributes":{"callback":null},"id":"119585","type":"DataRange1d"},{"attributes":{},"id":"119587","type":"LinearScale"},{"attributes":{},"id":"119597","type":"BasicTicker"},{"attributes":{"below":[{"id":"119591","type":"LinearAxis"}],"center":[{"id":"119595","type":"Grid"},{"id":"119600","type":"Grid"}],"left":[{"id":"119596","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"119625","type":"GlyphRenderer"}],"title":{"id":"119627","type":"Title"},"toolbar":{"id":"119611","type":"Toolbar"},"x_range":{"id":"119583","type":"DataRange1d"},"x_scale":{"id":"119587","type":"LinearScale"},"y_range":{"id":"119585","type":"DataRange1d"},"y_scale":{"id":"119589","type":"LinearScale"}},"id":"119582","subtype":"Figure","type":"Plot"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"119633","type":"BasicTickFormatter"},"ticker":{"id":"119597","type":"BasicTicker"}},"id":"119596","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"119624","type":"Cross"},{"attributes":{},"id":"119608","type":"ResetTool"},{"attributes":{},"id":"119592","type":"BasicTicker"},{"attributes":{},"id":"119609","type":"SaveTool"},{"attributes":{"data_source":{"id":"119622","type":"ColumnDataSource"},"glyph":{"id":"119623","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"119624","type":"Cross"},"selection_glyph":null,"view":{"id":"119626","type":"CDSView"}},"id":"119625","type":"GlyphRenderer"}],"root_ids":["119582"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"f5943846-9c1a-4be8-b9fc-524bf5289194","roots":{"119582":"f8404b0c-c06e-4c1d-894a-58532b71ac2b"}}];
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