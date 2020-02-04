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
      };var element = document.getElementById("5b48011d-0f06-45b8-bfe3-771627db20b2");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '5b48011d-0f06-45b8-bfe3-771627db20b2' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"eb875f57-366d-4b8b-808c-e8da1826749f":{"roots":{"references":[{"attributes":{"text":""},"id":"98216","type":"Title"},{"attributes":{},"id":"98225","type":"Selection"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98197","type":"Patch"},{"attributes":{},"id":"98228","type":"UnionRenderers"},{"attributes":{"source":{"id":"98200","type":"ColumnDataSource"}},"id":"98204","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"98174","type":"PanTool"},{"id":"98175","type":"BoxZoomTool"},{"id":"98176","type":"WheelZoomTool"},{"id":"98177","type":"BoxSelectTool"},{"id":"98178","type":"LassoSelectTool"},{"id":"98179","type":"UndoTool"},{"id":"98180","type":"RedoTool"},{"id":"98181","type":"ResetTool"},{"id":"98182","type":"SaveTool"},{"id":"98183","type":"HoverTool"}]},"id":"98184","type":"Toolbar"},{"attributes":{},"id":"98229","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"onrRKfMttj9RDe/CBzC3PwCgDFwcMrg/rjIq9TA0uT9dxUeORTa6PwxYZSdaOLs/u+qCwG46vD9qfaBZgzy9PxgQvvKXPr4/x6Lbi6xAvz+7mnySYCHAPxJkC99qosA/ai2aK3UjwT/B9ih4f6TBPxnAt8SJJcI/cIlGEZSmwj/HUtVdnifDPx8cZKqoqMM/duXy9rIpxD/OroFDvarEPyV4EJDHK8U/fEGf3NGsxT/UCi4p3C3GPyvUvHXmrsY/g51LwvAvxz+DnUvC8C/HP4OdS8LwL8c/K9S8deauxj/UCi4p3C3GP3xBn9zRrMU/JXgQkMcrxT/OroFDvarEP3bl8vayKcQ/Hxxkqqiowz/HUtVdnifDP3CJRhGUpsI/GcC3xIklwj/B9ih4f6TBP2otmit1I8E/EmQL32qiwD+7mnySYCHAP8ei24usQL8/GBC+8pc+vj9qfaBZgzy9P7vqgsBuOrw/DFhlJ1o4uz9dxUeORTa6P64yKvUwNLk/AKAMXBwyuD9RDe/CBzC3P6J60SnzLbY/onrRKfMttj8=","dtype":"float64","shape":[52]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACrMObDoUL6P6sw5sOhQvo/QBbXsKbk+j89gn+MR5X7P2lSp/xvU/w/YzghzlQh/T8dWKEkTP39PymTn0h/7P4/ufcmKijq/z/WmtUERXwAQD5VF6XUDAFAyEh9MiOmAUDlSagMxkgCQGdXLaY38wJAs+fcQyynA0BSUka0L2MEQD075t/gJgVAKFdM+ZbyBUAvjLyqjsUGQEgVdXBSoQdAtZ1Ywv2DCEDQVsuBT28JQI18JvReYwpAqQnFwjFmC0B3uAM3cG0MQEik+a82fA1AAAAAAAAAAAA=","dtype":"float64","shape":[52]}},"selected":{"id":"98229","type":"Selection"},"selection_policy":{"id":"98228","type":"UnionRenderers"}},"id":"98205","type":"ColumnDataSource"},{"attributes":{},"id":"98174","type":"PanTool"},{"attributes":{},"id":"98230","type":"UnionRenderers"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98206","type":"Patch"},{"attributes":{"overlay":{"id":"98221","type":"BoxAnnotation"}},"id":"98175","type":"BoxZoomTool"},{"attributes":{},"id":"98231","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"MC3Ob6MAxz6zJEemKSRwP9AnEJy5IoA/R738ZF4ziD9eqfSWASKQPxn0avtTKpQ/1T7hX6YymD+QiVfE+DqcPybqZpSlIaA/JupmlKUhoD8m6maUpSGgP5CJV8T4Opw/1T7hX6YymD8Z9Gr7UyqUP16p9JYBIpA/R738ZF4ziD/QJxCcuSKAP7MkR6YpJHA/MC3Ob6MAxz4wLc5vowDHPg==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkqaZOcmSGECSppk5yZIYQJvFweHhWxlA8Nq4vFAZGkBVb/2bysUaQKNSJQQEXBtABfLQfSDWG0DO0WBRSTAcQNS6ARdaaBxAjOL5ckR7HEAAAAAAAAAAAA==","dtype":"float64","shape":[20]}},"selected":{"id":"98225","type":"Selection"},"selection_policy":{"id":"98224","type":"UnionRenderers"}},"id":"98195","type":"ColumnDataSource"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98207","type":"Patch"},{"attributes":{},"id":"98176","type":"WheelZoomTool"},{"attributes":{"dimension":1,"ticker":{"id":"98170","type":"BasicTicker"}},"id":"98173","type":"Grid"},{"attributes":{"data_source":{"id":"98205","type":"ColumnDataSource"},"glyph":{"id":"98206","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98207","type":"Patch"},"selection_glyph":null,"view":{"id":"98209","type":"CDSView"}},"id":"98208","type":"GlyphRenderer"},{"attributes":{"callback":null,"overlay":{"id":"98222","type":"BoxAnnotation"}},"id":"98177","type":"BoxSelectTool"},{"attributes":{"source":{"id":"98205","type":"ColumnDataSource"}},"id":"98209","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"98223","type":"PolyAnnotation"}},"id":"98178","type":"LassoSelectTool"},{"attributes":{},"id":"98162","type":"LinearScale"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[308]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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","dtype":"float64","shape":[308]}},"selected":{"id":"98231","type":"Selection"},"selection_policy":{"id":"98230","type":"UnionRenderers"}},"id":"98210","type":"ColumnDataSource"},{"attributes":{},"id":"98179","type":"UndoTool"},{"attributes":{"formatter":{"id":"98220","type":"BasicTickFormatter"},"ticker":{"id":"98170","type":"BasicTicker"}},"id":"98169","type":"LinearAxis"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98211","type":"Patch"},{"attributes":{},"id":"98180","type":"RedoTool"},{"attributes":{"callback":null},"id":"98158","type":"DataRange1d"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98212","type":"Patch"},{"attributes":{},"id":"98181","type":"ResetTool"},{"attributes":{},"id":"98170","type":"BasicTicker"},{"attributes":{"data_source":{"id":"98210","type":"ColumnDataSource"},"glyph":{"id":"98211","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98212","type":"Patch"},"selection_glyph":null,"view":{"id":"98214","type":"CDSView"}},"id":"98213","type":"GlyphRenderer"},{"attributes":{},"id":"98182","type":"SaveTool"},{"attributes":{},"id":"98224","type":"UnionRenderers"},{"attributes":{"source":{"id":"98210","type":"ColumnDataSource"}},"id":"98214","type":"CDSView"},{"attributes":{},"id":"98226","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"98183","type":"HoverTool"},{"attributes":{},"id":"98218","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"98164","type":"LinearAxis"}],"center":[{"id":"98168","type":"Grid"},{"id":"98173","type":"Grid"}],"left":[{"id":"98169","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"98198","type":"GlyphRenderer"},{"id":"98203","type":"GlyphRenderer"},{"id":"98208","type":"GlyphRenderer"},{"id":"98213","type":"GlyphRenderer"}],"title":{"id":"98216","type":"Title"},"toolbar":{"id":"98184","type":"Toolbar"},"x_range":{"id":"98156","type":"DataRange1d"},"x_scale":{"id":"98160","type":"LinearScale"},"y_range":{"id":"98158","type":"DataRange1d"},"y_scale":{"id":"98162","type":"LinearScale"}},"id":"98155","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"98220","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"98195","type":"ColumnDataSource"},"glyph":{"id":"98196","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98197","type":"Patch"},"selection_glyph":null,"view":{"id":"98199","type":"CDSView"}},"id":"98198","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98196","type":"Patch"},{"attributes":{},"id":"98165","type":"BasicTicker"},{"attributes":{"callback":null},"id":"98156","type":"DataRange1d"},{"attributes":{"source":{"id":"98195","type":"ColumnDataSource"}},"id":"98199","type":"CDSView"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98221","type":"BoxAnnotation"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"hA+ixs4loj/hNN349ymkPz9aGCshLqY/nX9TXUoyqD/6pI6PczaqP1jKycGcOqw/te8E9MU+rj+JCiCTdyGwPzidPSyMI7E/5y9bxaAlsj+VwnhetSezP0RVlvfJKbQ/8+ezkN4rtT/z57OQ3iu1P/Pns5DeK7U/RFWW98kptD+VwnhetSezP+cvW8WgJbI/OJ09LIwjsT+JCiCTdyGwP7XvBPTFPq4/WMrJwZw6rD/6pI6PczaqP51/U11KMqg/P1oYKyEupj/hNN349ymkP4QPosbOJaI/hA+ixs4loj8=","dtype":"float64","shape":[28]},"y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADI438N3ZEOQMjjfw3dkQ5ASijJX9+xD0B9ngOqMm4QQFMPcHKuCRFAeKhchkCrEUDpczmvj1QSQNPDkFE9BhNAZJRrlBvAE0Ac8A3YIIIUQHk+/MHPSxVAuqMXDwQbFkCJUoAE4u0WQL9v6wiTwRdAAAAAAAAAAAA=","dtype":"float64","shape":[28]}},"selected":{"id":"98227","type":"Selection"},"selection_policy":{"id":"98226","type":"UnionRenderers"}},"id":"98200","type":"ColumnDataSource"},{"attributes":{"formatter":{"id":"98218","type":"BasicTickFormatter"},"ticker":{"id":"98165","type":"BasicTicker"}},"id":"98164","type":"LinearAxis"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"98222","type":"BoxAnnotation"},{"attributes":{"ticker":{"id":"98165","type":"BasicTicker"}},"id":"98168","type":"Grid"},{"attributes":{"fill_alpha":0.75,"fill_color":"#2a2eec","line_color":null,"x":{"field":"x"},"y":{"field":"y"}},"id":"98201","type":"Patch"},{"attributes":{},"id":"98160","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"98223","type":"PolyAnnotation"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"98202","type":"Patch"},{"attributes":{},"id":"98227","type":"Selection"},{"attributes":{"data_source":{"id":"98200","type":"ColumnDataSource"},"glyph":{"id":"98201","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"98202","type":"Patch"},"selection_glyph":null,"view":{"id":"98204","type":"CDSView"}},"id":"98203","type":"GlyphRenderer"}],"root_ids":["98155"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"eb875f57-366d-4b8b-808c-e8da1826749f","roots":{"98155":"5b48011d-0f06-45b8-bfe3-771627db20b2"}}];
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