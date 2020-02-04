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
      };var element = document.getElementById("a94ea6fe-1745-4251-8ac3-708f4dc6a3c5");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'a94ea6fe-1745-4251-8ac3-708f4dc6a3c5' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"3578ce98-7c12-407f-aff0-d6651028f232":{"roots":{"references":[{"attributes":{},"id":"95846","type":"ResetTool"},{"attributes":{},"id":"95876","type":"Selection"},{"attributes":{"callback":null},"id":"95823","type":"DataRange1d"},{"attributes":{},"id":"95839","type":"PanTool"},{"attributes":{},"id":"95844","type":"UndoTool"},{"attributes":{"callback":null,"overlay":{"id":"95874","type":"PolyAnnotation"}},"id":"95843","type":"LassoSelectTool"},{"attributes":{"source":{"id":"95860","type":"ColumnDataSource"}},"id":"95864","type":"CDSView"},{"attributes":{"callback":null},"id":"95821","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"95874","type":"PolyAnnotation"},{"attributes":{},"id":"95835","type":"BasicTicker"},{"attributes":{"data_source":{"id":"95860","type":"ColumnDataSource"},"glyph":{"id":"95861","type":"Cross"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95862","type":"Cross"},"selection_glyph":null,"view":{"id":"95864","type":"CDSView"}},"id":"95863","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95839","type":"PanTool"},{"id":"95840","type":"BoxZoomTool"},{"id":"95841","type":"WheelZoomTool"},{"id":"95842","type":"BoxSelectTool"},{"id":"95843","type":"LassoSelectTool"},{"id":"95844","type":"UndoTool"},{"id":"95845","type":"RedoTool"},{"id":"95846","type":"ResetTool"},{"id":"95847","type":"SaveTool"},{"id":"95848","type":"HoverTool"}]},"id":"95849","type":"Toolbar"},{"attributes":{},"id":"95869","type":"BasicTickFormatter"},{"attributes":{"text":"Centered eight - Non centered eight"},"id":"95865","type":"Title"},{"attributes":{},"id":"95871","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"95872","type":"BoxAnnotation"}},"id":"95840","type":"BoxZoomTool"},{"attributes":{},"id":"95841","type":"WheelZoomTool"},{"attributes":{"formatter":{"id":"95869","type":"BasicTickFormatter"},"ticker":{"id":"95830","type":"BasicTicker"}},"id":"95829","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"95873","type":"BoxAnnotation"}},"id":"95842","type":"BoxSelectTool"},{"attributes":{},"id":"95847","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":[0,1,2,3,4,5,6,7],"y":{"__ndarray__":"gKw/FCDkuj8AeHliZVWePwCAiHewTyW/AI7er++Hoz+AHYmsYnG0vwCgk05GA0g/gJ3Q558ruT8A3aKQ7GmgPw==","dtype":"float64","shape":[8]}},"selected":{"id":"95876","type":"Selection"},"selection_policy":{"id":"95875","type":"UnionRenderers"}},"id":"95860","type":"ColumnDataSource"},{"attributes":{},"id":"95830","type":"BasicTicker"},{"attributes":{"below":[{"id":"95829","type":"LinearAxis"}],"center":[{"id":"95833","type":"Grid"},{"id":"95838","type":"Grid"}],"left":[{"id":"95834","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"95863","type":"GlyphRenderer"}],"title":{"id":"95865","type":"Title"},"toolbar":{"id":"95849","type":"Toolbar"},"x_range":{"id":"95821","type":"DataRange1d"},"x_scale":{"id":"95825","type":"LinearScale"},"y_range":{"id":"95823","type":"DataRange1d"},"y_scale":{"id":"95827","type":"LinearScale"}},"id":"95820","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95825","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95873","type":"BoxAnnotation"},{"attributes":{},"id":"95875","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"95848","type":"HoverTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"95862","type":"Cross"},{"attributes":{"axis_label":"ELPD difference","formatter":{"id":"95871","type":"BasicTickFormatter"},"ticker":{"id":"95835","type":"BasicTicker"}},"id":"95834","type":"LinearAxis"},{"attributes":{},"id":"95845","type":"RedoTool"},{"attributes":{"dimension":1,"ticker":{"id":"95835","type":"BasicTicker"}},"id":"95838","type":"Grid"},{"attributes":{},"id":"95827","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95872","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"95830","type":"BasicTicker"}},"id":"95833","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6.0},"x":{"field":"x"},"y":{"field":"y"}},"id":"95861","type":"Cross"}],"root_ids":["95820"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"3578ce98-7c12-407f-aff0-d6651028f232","roots":{"95820":"a94ea6fe-1745-4251-8ac3-708f4dc6a3c5"}}];
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