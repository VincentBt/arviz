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
      };var element = document.getElementById("b529c64c-238b-430c-987c-7a0f4bf66ba0");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'b529c64c-238b-430c-987c-7a0f4bf66ba0' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"e4beab2e-ca96-4d62-af03-c1e3404d5356":{"roots":{"references":[{"attributes":{},"id":"114189","type":"LinearScale"},{"attributes":{"callback":null},"id":"114210","type":"HoverTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114236","type":"BasicTickFormatter"},"ticker":{"id":"114192","type":"BasicTicker"}},"id":"114191","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"114201","type":"PanTool"},{"id":"114202","type":"BoxZoomTool"},{"id":"114203","type":"WheelZoomTool"},{"id":"114204","type":"BoxSelectTool"},{"id":"114205","type":"LassoSelectTool"},{"id":"114206","type":"UndoTool"},{"id":"114207","type":"RedoTool"},{"id":"114208","type":"ResetTool"},{"id":"114209","type":"SaveTool"},{"id":"114210","type":"HoverTool"}]},"id":"114211","type":"Toolbar"},{"attributes":{},"id":"114192","type":"BasicTicker"},{"attributes":{},"id":"114245","type":"Selection"},{"attributes":{"children":[{"id":"114249","type":"ToolbarBox"},{"id":"114247","type":"GridBox"}]},"id":"114250","type":"Column"},{"attributes":{"data_source":{"id":"114222","type":"ColumnDataSource"},"glyph":{"id":"114223","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114224","type":"Dash"},"selection_glyph":null,"view":{"id":"114226","type":"CDSView"}},"id":"114225","type":"GlyphRenderer"},{"attributes":{"ticker":{"id":"114192","type":"BasicTicker"}},"id":"114195","type":"Grid"},{"attributes":{"source":{"id":"114222","type":"ColumnDataSource"}},"id":"114226","type":"CDSView"},{"attributes":{"toolbar":{"id":"114248","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114249","type":"ToolbarBox"},{"attributes":{"axis_label":"Value $\\\\pm$ MCSE for quantiles","formatter":{"id":"114238","type":"BasicTickFormatter"},"ticker":{"id":"114197","type":"BasicTicker"}},"id":"114196","type":"LinearAxis"},{"attributes":{"callback":null,"data":{"xs":[[0.05,0.05],[0.09736842105263158,0.09736842105263158],[0.14473684210526316,0.14473684210526316],[0.19210526315789472,0.19210526315789472],[0.23947368421052628,0.23947368421052628],[0.28684210526315784,0.28684210526315784],[0.33421052631578946,0.33421052631578946],[0.381578947368421,0.381578947368421],[0.4289473684210526,0.4289473684210526],[0.47631578947368414,0.47631578947368414],[0.5236842105263158,0.5236842105263158],[0.5710526315789474,0.5710526315789474],[0.618421052631579,0.618421052631579],[0.6657894736842105,0.6657894736842105],[0.7131578947368421,0.7131578947368421],[0.7605263157894736,0.7605263157894736],[0.8078947368421052,0.8078947368421052],[0.8552631578947368,0.8552631578947368],[0.9026315789473683,0.9026315789473683],[0.95,0.95]],"ys":[[0.03772778497686324,0.06341435441411682],[0.048609960988271056,0.08295225309898624],[0.06153599604134034,0.09490999198083684],[0.07329044599237555,0.1000031913144879],[0.08263983048641552,0.1051362776469015],[0.0903540597070716,0.1093065480976247],[0.09699223710421645,0.11285031907778881],[0.10362105601890598,0.11769206470520818],[0.10944498910150591,0.12087120746704239],[0.11473656737082852,0.12549187350823154],[0.11869566056318977,0.13103878673936042],[0.12529589160671384,0.1370404814083397],[0.1312653674053737,0.14120609142856455],[0.13596314056127606,0.14694609137693881],[0.14241124076490258,0.15486157132792017],[0.1498693638921837,0.1623597345347899],[0.1580204612689074,0.16995562139453518],[0.1675166004173108,0.18035869233133667],[0.17835199430027804,0.19271924534760554],[0.19922327755189467,0.21477055544981277]]},"selected":{"id":"114245","type":"Selection"},"selection_policy":{"id":"114244","type":"UnionRenderers"}},"id":"114227","type":"ColumnDataSource"},{"attributes":{},"id":"114197","type":"BasicTicker"},{"attributes":{"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"114228","type":"MultiLine"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"xs":{"field":"xs"},"ys":{"field":"ys"}},"id":"114229","type":"MultiLine"},{"attributes":{"data_source":{"id":"114227","type":"ColumnDataSource"},"glyph":{"id":"114228","type":"MultiLine"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114229","type":"MultiLine"},"selection_glyph":null,"view":{"id":"114231","type":"CDSView"}},"id":"114230","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"CYbuhHPkqT+LcnLXB9ewP/KkEhFsBrQ/IT9rZHwutj+EjbMpDAm4PygLaZJ6jrk/Oi0O8h7cuj9Rx9cD/VO8P4AhAEoAe70/UYOSOM6/vj/uruxhTPe/P4qoqX8eysA/T0AyISxwwT+nT7pSLxvCP6Bue4uEBsM/YZ6mwY/7wz8sODplj/3EP4xHXLuWQ8Y/koaxlaG/xz+0O1/9337KPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114243","type":"Selection"},"selection_policy":{"id":"114242","type":"UnionRenderers"}},"id":"114222","type":"ColumnDataSource"},{"attributes":{"source":{"id":"114227","type":"ColumnDataSource"}},"id":"114231","type":"CDSView"},{"attributes":{},"id":"114201","type":"PanTool"},{"attributes":{"text":"sigma_a"},"id":"114232","type":"Title"},{"attributes":{"overlay":{"id":"114239","type":"BoxAnnotation"}},"id":"114202","type":"BoxZoomTool"},{"attributes":{},"id":"114236","type":"BasicTickFormatter"},{"attributes":{},"id":"114203","type":"WheelZoomTool"},{"attributes":{"callback":null},"id":"114183","type":"DataRange1d"},{"attributes":{"callback":null,"overlay":{"id":"114240","type":"BoxAnnotation"}},"id":"114204","type":"BoxSelectTool"},{"attributes":{},"id":"114238","type":"BasicTickFormatter"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114223","type":"Dash"},{"attributes":{},"id":"114243","type":"Selection"},{"attributes":{"dimension":1,"ticker":{"id":"114197","type":"BasicTicker"}},"id":"114200","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"114241","type":"PolyAnnotation"}},"id":"114205","type":"LassoSelectTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114239","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114240","type":"BoxAnnotation"},{"attributes":{},"id":"114206","type":"UndoTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114224","type":"Dash"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114241","type":"PolyAnnotation"},{"attributes":{},"id":"114207","type":"RedoTool"},{"attributes":{},"id":"114242","type":"UnionRenderers"},{"attributes":{"children":[[{"id":"114182","subtype":"Figure","type":"Plot"},0,0]]},"id":"114247","type":"GridBox"},{"attributes":{"below":[{"id":"114191","type":"LinearAxis"}],"center":[{"id":"114195","type":"Grid"},{"id":"114200","type":"Grid"}],"left":[{"id":"114196","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"114225","type":"GlyphRenderer"},{"id":"114230","type":"GlyphRenderer"}],"title":{"id":"114232","type":"Title"},"toolbar":{"id":"114211","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"114183","type":"DataRange1d"},"x_scale":{"id":"114187","type":"LinearScale"},"y_range":{"id":"114185","type":"DataRange1d"},"y_scale":{"id":"114189","type":"LinearScale"}},"id":"114182","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"114208","type":"ResetTool"},{"attributes":{"callback":null},"id":"114185","type":"DataRange1d"},{"attributes":{},"id":"114244","type":"UnionRenderers"},{"attributes":{},"id":"114209","type":"SaveTool"},{"attributes":{},"id":"114187","type":"LinearScale"},{"attributes":{"tools":[{"id":"114201","type":"PanTool"},{"id":"114202","type":"BoxZoomTool"},{"id":"114203","type":"WheelZoomTool"},{"id":"114204","type":"BoxSelectTool"},{"id":"114205","type":"LassoSelectTool"},{"id":"114206","type":"UndoTool"},{"id":"114207","type":"RedoTool"},{"id":"114208","type":"ResetTool"},{"id":"114209","type":"SaveTool"},{"id":"114210","type":"HoverTool"}]},"id":"114248","type":"ProxyToolbar"}],"root_ids":["114250"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"e4beab2e-ca96-4d62-af03-c1e3404d5356","roots":{"114250":"b529c64c-238b-430c-987c-7a0f4bf66ba0"}}];
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