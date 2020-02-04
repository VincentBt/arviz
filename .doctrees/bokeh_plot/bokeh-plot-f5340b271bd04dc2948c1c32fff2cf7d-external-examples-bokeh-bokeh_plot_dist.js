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
      };var element = document.getElementById("f4f7ea51-1a2b-4af9-8c53-94f411e33b41");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f4f7ea51-1a2b-4af9-8c53-94f411e33b41' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"2bbf0aa3-c2d9-4d8b-be27-e20cf004d3f7":{"roots":{"references":[{"attributes":{},"id":"95659","type":"ResetTool"},{"attributes":{},"id":"95643","type":"LinearScale"},{"attributes":{"children":[{"id":"95636","subtype":"Figure","type":"Plot"},{"id":"95668","subtype":"Figure","type":"Plot"}]},"id":"95728","type":"Row"},{"attributes":{},"id":"95641","type":"LinearScale"},{"attributes":{"formatter":{"id":"95724","type":"BasicTickFormatter"},"ticker":{"id":"95683","type":"BasicTicker"}},"id":"95682","type":"LinearAxis"},{"attributes":{},"id":"95675","type":"LinearScale"},{"attributes":{"dimension":1,"ticker":{"id":"95683","type":"BasicTicker"}},"id":"95686","type":"Grid"},{"attributes":{},"id":"95656","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"95700","type":"ColumnDataSource"},"glyph":{"id":"95701","type":"Quad"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95702","type":"Quad"},"selection_glyph":null,"view":{"id":"95704","type":"CDSView"}},"id":"95703","type":"GlyphRenderer"},{"attributes":{},"id":"95660","type":"HelpTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"95716","type":"Line"},{"attributes":{"callback":null},"id":"95669","type":"DataRange1d"},{"attributes":{},"id":"95673","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95655","type":"PanTool"},{"id":"95656","type":"WheelZoomTool"},{"id":"95657","type":"BoxZoomTool"},{"id":"95658","type":"SaveTool"},{"id":"95659","type":"ResetTool"},{"id":"95660","type":"HelpTool"}]},"id":"95661","type":"Toolbar"},{"attributes":{"items":[{"id":"95727","type":"LegendItem"}]},"id":"95726","type":"Legend"},{"attributes":{},"id":"95678","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95711","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"95645","type":"LinearAxis"}],"center":[{"id":"95649","type":"Grid"},{"id":"95654","type":"Grid"},{"id":"95712","type":"Legend"}],"left":[{"id":"95650","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95703","type":"GlyphRenderer"}],"title":{"id":"95706","type":"Title"},"toolbar":{"id":"95661","type":"Toolbar"},"x_range":{"id":"95637","type":"DataRange1d"},"x_scale":{"id":"95641","type":"LinearScale"},"y_range":{"id":"95639","type":"DataRange1d"},"y_scale":{"id":"95643","type":"LinearScale"}},"id":"95636","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"95746","type":"Selection"},{"attributes":{"formatter":{"id":"95722","type":"BasicTickFormatter"},"ticker":{"id":"95678","type":"BasicTicker"}},"id":"95677","type":"LinearAxis"},{"attributes":{},"id":"95691","type":"ResetTool"},{"attributes":{"label":{"value":"Poisson"},"renderers":[{"id":"95703","type":"GlyphRenderer"}]},"id":"95713","type":"LegendItem"},{"attributes":{},"id":"95692","type":"HelpTool"},{"attributes":{},"id":"95690","type":"SaveTool"},{"attributes":{"below":[{"id":"95677","type":"LinearAxis"}],"center":[{"id":"95681","type":"Grid"},{"id":"95686","type":"Grid"},{"id":"95726","type":"Legend"}],"left":[{"id":"95682","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"95717","type":"GlyphRenderer"}],"title":{"id":"95720","type":"Title"},"toolbar":{"id":"95693","type":"Toolbar"},"x_range":{"id":"95669","type":"DataRange1d"},"x_scale":{"id":"95673","type":"LinearScale"},"y_range":{"id":"95671","type":"DataRange1d"},"y_scale":{"id":"95675","type":"LinearScale"}},"id":"95668","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null},"id":"95637","type":"DataRange1d"},{"attributes":{},"id":"95710","type":"BasicTickFormatter"},{"attributes":{},"id":"95651","type":"BasicTicker"},{"attributes":{"bottom":{"value":0},"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"left":{"field":"left"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95702","type":"Quad"},{"attributes":{"items":[{"id":"95713","type":"LegendItem"}]},"id":"95712","type":"Legend"},{"attributes":{},"id":"95683","type":"BasicTicker"},{"attributes":{"formatter":{"id":"95710","type":"BasicTickFormatter"},"ticker":{"id":"95651","type":"BasicTicker"}},"id":"95650","type":"LinearAxis"},{"attributes":{"ticker":{"id":"95646","type":"BasicTicker"}},"id":"95649","type":"Grid"},{"attributes":{"dimension":1,"ticker":{"id":"95651","type":"BasicTicker"}},"id":"95654","type":"Grid"},{"attributes":{},"id":"95687","type":"PanTool"},{"attributes":{},"id":"95658","type":"SaveTool"},{"attributes":{},"id":"95745","type":"UnionRenderers"},{"attributes":{"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"95715","type":"Line"},{"attributes":{"ticker":{"id":"95678","type":"BasicTicker"}},"id":"95681","type":"Grid"},{"attributes":{"callback":null,"data":{"left":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],"right":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],"top":{"__ndarray__":"exSuR+F6lD8730+Nl26yP8P1KFyPwsU/ObTIdr6fyj+6SQwCK4fGP99PjZduEsM/ke18PzVeuj9KDAIrhxapP/yp8dJNYqA/uB6F61G4jj97FK5H4Xp0PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPyp8dJNYlA/","dtype":"float64","shape":[15]}},"selected":{"id":"95743","type":"Selection"},"selection_policy":{"id":"95742","type":"UnionRenderers"}},"id":"95700","type":"ColumnDataSource"},{"attributes":{},"id":"95646","type":"BasicTicker"},{"attributes":{},"id":"95743","type":"Selection"},{"attributes":{},"id":"95708","type":"BasicTickFormatter"},{"attributes":{},"id":"95722","type":"BasicTickFormatter"},{"attributes":{"overlay":{"id":"95725","type":"BoxAnnotation"}},"id":"95689","type":"BoxZoomTool"},{"attributes":{"source":{"id":"95714","type":"ColumnDataSource"}},"id":"95718","type":"CDSView"},{"attributes":{"bottom":{"value":0},"fill_color":{"value":"black"},"left":{"field":"left"},"right":{"field":"right"},"top":{"field":"top"}},"id":"95701","type":"Quad"},{"attributes":{},"id":"95688","type":"WheelZoomTool"},{"attributes":{"overlay":{"id":"95711","type":"BoxAnnotation"}},"id":"95657","type":"BoxZoomTool"},{"attributes":{"callback":null},"id":"95671","type":"DataRange1d"},{"attributes":{"text":""},"id":"95706","type":"Title"},{"attributes":{"formatter":{"id":"95708","type":"BasicTickFormatter"},"ticker":{"id":"95646","type":"BasicTicker"}},"id":"95645","type":"LinearAxis"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"95687","type":"PanTool"},{"id":"95688","type":"WheelZoomTool"},{"id":"95689","type":"BoxZoomTool"},{"id":"95690","type":"SaveTool"},{"id":"95691","type":"ResetTool"},{"id":"95692","type":"HelpTool"}]},"id":"95693","type":"Toolbar"},{"attributes":{},"id":"95655","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[200]},"y":{"__ndarray__":"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","dtype":"float64","shape":[200]}},"selected":{"id":"95746","type":"Selection"},"selection_policy":{"id":"95745","type":"UnionRenderers"}},"id":"95714","type":"ColumnDataSource"},{"attributes":{},"id":"95724","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Gaussian"},"renderers":[{"id":"95717","type":"GlyphRenderer"}]},"id":"95727","type":"LegendItem"},{"attributes":{},"id":"95742","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"95725","type":"BoxAnnotation"},{"attributes":{"callback":null},"id":"95639","type":"DataRange1d"},{"attributes":{"data_source":{"id":"95714","type":"ColumnDataSource"},"glyph":{"id":"95715","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"95716","type":"Line"},"selection_glyph":null,"view":{"id":"95718","type":"CDSView"}},"id":"95717","type":"GlyphRenderer"},{"attributes":{"text":""},"id":"95720","type":"Title"},{"attributes":{"source":{"id":"95700","type":"ColumnDataSource"}},"id":"95704","type":"CDSView"}],"root_ids":["95728"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"2bbf0aa3-c2d9-4d8b-be27-e20cf004d3f7","roots":{"95728":"f4f7ea51-1a2b-4af9-8c53-94f411e33b41"}}];
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