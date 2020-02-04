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
      };var element = document.getElementById("f6d3c429-aedc-47ee-a0a0-082eabb8c6f8");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid 'f6d3c429-aedc-47ee-a0a0-082eabb8c6f8' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"61ac3670-a202-4f7a-a091-8a43c17970f0":{"roots":{"references":[{"attributes":{"below":[{"id":"96106","type":"LinearAxis"}],"center":[{"id":"96110","type":"Grid"},{"id":"96115","type":"Grid"},{"id":"96158","type":"Legend"}],"left":[{"id":"96111","type":"LinearAxis"}],"output_backend":"webgl","plot_height":288,"plot_width":432,"renderers":[{"id":"96140","type":"GlyphRenderer"},{"id":"96145","type":"GlyphRenderer"},{"id":"96163","type":"GlyphRenderer"},{"id":"96182","type":"GlyphRenderer"},{"id":"96184","type":"Span"}],"title":{"id":"96185","type":"Title"},"toolbar":{"id":"96126","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"96098","type":"DataRange1d"},"x_scale":{"id":"96102","type":"LinearScale"},"y_range":{"id":"96100","type":"DataRange1d"},"y_scale":{"id":"96104","type":"LinearScale"}},"id":"96097","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"96104","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96154","type":"BoxAnnotation"},{"attributes":{},"id":"96118","type":"WheelZoomTool"},{"attributes":{"label":{"value":"bulk"},"renderers":[{"id":"96145","type":"GlyphRenderer"}]},"id":"96159","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"96155","type":"PolyAnnotation"},{"attributes":{},"id":"96202","type":"Selection"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96200","type":"Selection"},"selection_policy":{"id":"96199","type":"UnionRenderers"}},"id":"96160","type":"ColumnDataSource"},{"attributes":{},"id":"96201","type":"UnionRenderers"},{"attributes":{},"id":"96199","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"96153","type":"BoxAnnotation"},{"attributes":{},"id":"96107","type":"BasicTicker"},{"attributes":{"children":[[{"id":"96097","subtype":"Figure","type":"Plot"},0,0]]},"id":"96204","type":"GridBox"},{"attributes":{"data_source":{"id":"96179","type":"ColumnDataSource"},"glyph":{"id":"96180","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96181","type":"Circle"},"selection_glyph":null,"view":{"id":"96183","type":"CDSView"}},"id":"96182","type":"GlyphRenderer"},{"attributes":{},"id":"96150","type":"BasicTickFormatter"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96162","type":"Line"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96157","type":"Selection"},"selection_policy":{"id":"96156","type":"UnionRenderers"}},"id":"96137","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96144","type":"Line"},{"attributes":{"source":{"id":"96179","type":"ColumnDataSource"}},"id":"96183","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"96154","type":"BoxAnnotation"}},"id":"96119","type":"BoxSelectTool"},{"attributes":{"items":[{"id":"96159","type":"LegendItem"},{"id":"96178","type":"LegendItem"}]},"id":"96158","type":"Legend"},{"attributes":{},"id":"96122","type":"RedoTool"},{"attributes":{},"id":"96152","type":"BasicTickFormatter"},{"attributes":{},"id":"96112","type":"BasicTicker"},{"attributes":{},"id":"96121","type":"UndoTool"},{"attributes":{"data_source":{"id":"96137","type":"ColumnDataSource"},"glyph":{"id":"96138","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96139","type":"Circle"},"selection_glyph":null,"view":{"id":"96141","type":"CDSView"}},"id":"96140","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"96100","type":"DataRange1d"},{"attributes":{"text":"b"},"id":"96185","type":"Title"},{"attributes":{},"id":"96156","type":"UnionRenderers"},{"attributes":{},"id":"96200","type":"Selection"},{"attributes":{"children":[{"id":"96206","type":"ToolbarBox"},{"id":"96204","type":"GridBox"}]},"id":"96207","type":"Column"},{"attributes":{},"id":"96124","type":"SaveTool"},{"attributes":{"line_color":{"value":"red"},"line_dash":[6],"line_width":{"value":3},"location":400},"id":"96184","type":"Span"},{"attributes":{"dimension":1,"ticker":{"id":"96112","type":"BasicTicker"}},"id":"96115","type":"Grid"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96138","type":"Circle"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"96FbKLyBMkDEFAnglsNWQBC5N3NCBm1AhSuZf4dmdECKE1YWcHt0QBw2aMPTi3lAiOdK+uWaeUAGhRKd9gZ9QNX3uUqhqIFAnLXIDxQMhUCr7PKl8U6JQLaUOqun4o1AoNLS679XkECU4/KXSGmSQCcpnoFLL5RACq31A5f5lUCcLj2ibHeWQF4U4M8TD5hAMc5SiTsFmkArYzxHIfWcQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96177","type":"Selection"},"selection_policy":{"id":"96176","type":"UnionRenderers"}},"id":"96142","type":"ColumnDataSource"},{"attributes":{"axis_label":"ESS","formatter":{"id":"96152","type":"BasicTickFormatter"},"ticker":{"id":"96112","type":"BasicTicker"}},"id":"96111","type":"LinearAxis"},{"attributes":{},"id":"96177","type":"Selection"},{"attributes":{},"id":"96102","type":"LinearScale"},{"attributes":{},"id":"96123","type":"ResetTool"},{"attributes":{"overlay":{"id":"96153","type":"BoxAnnotation"}},"id":"96117","type":"BoxZoomTool"},{"attributes":{"source":{"id":"96160","type":"ColumnDataSource"}},"id":"96164","type":"CDSView"},{"attributes":{"ticker":{"id":"96107","type":"BasicTicker"}},"id":"96110","type":"Grid"},{"attributes":{"source":{"id":"96142","type":"ColumnDataSource"}},"id":"96146","type":"CDSView"},{"attributes":{"fill_color":{"value":"orange"},"line_color":{"value":"orange"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96180","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96139","type":"Circle"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":6},"x":{"field":"x"},"y":{"field":"y"}},"id":"96181","type":"Circle"},{"attributes":{"data_source":{"id":"96160","type":"ColumnDataSource"},"glyph":{"id":"96161","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96162","type":"Line"},"selection_glyph":null,"view":{"id":"96164","type":"CDSView"}},"id":"96163","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"96125","type":"HoverTool"},{"attributes":{"axis_label":"Total number of draws","formatter":{"id":"96150","type":"BasicTickFormatter"},"ticker":{"id":"96107","type":"BasicTicker"}},"id":"96106","type":"LinearAxis"},{"attributes":{},"id":"96157","type":"Selection"},{"attributes":{},"id":"96116","type":"PanTool"},{"attributes":{"source":{"id":"96137","type":"ColumnDataSource"}},"id":"96141","type":"CDSView"},{"attributes":{"callback":null,"overlay":{"id":"96155","type":"PolyAnnotation"}},"id":"96120","type":"LassoSelectTool"},{"attributes":{"label":{"value":"tail"},"renderers":[{"id":"96163","type":"GlyphRenderer"}]},"id":"96178","type":"LegendItem"},{"attributes":{"toolbar":{"id":"96205","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"96206","type":"ToolbarBox"},{"attributes":{"tools":[{"id":"96116","type":"PanTool"},{"id":"96117","type":"BoxZoomTool"},{"id":"96118","type":"WheelZoomTool"},{"id":"96119","type":"BoxSelectTool"},{"id":"96120","type":"LassoSelectTool"},{"id":"96121","type":"UndoTool"},{"id":"96122","type":"RedoTool"},{"id":"96123","type":"ResetTool"},{"id":"96124","type":"SaveTool"},{"id":"96125","type":"HoverTool"}]},"id":"96205","type":"ProxyToolbar"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"AAAAAAAAWUAAAAAAAABpQAAAAAAAwHJAAAAAAAAAeUAAAAAAAEB/QAAAAAAAwIJAAAAAAADghUAAAAAAAACJQAAAAAAAIIxAAAAAAABAj0AAAAAAADCRQAAAAAAAwJJAAAAAAABQlEAAAAAAAOCVQAAAAAAAcJdAAAAAAAAAmUAAAAAAAJCaQAAAAAAAIJxAAAAAAACwnUAAAAAAAECfQA==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"efl4S7K5UECliF2aYsBdQM+3s3hpAWhA30PsAOxbckA9j+MdBmV5QCjkO/TQqHpAlo8qDuxxfUBhgLuJn9GBQDEicW5nj4VAmAm8VupRhkAL06Ie5C6GQBjMN1TJ+olARw25XLj/ikAxQOYiRzCOQGk5Bqm0MJBA5vBmnUCPkEAAWgBDqmmSQHF+IQeXypNAO/uxzEAolEDsjMUYoPKUQA==","dtype":"float64","shape":[20]}},"selected":{"id":"96202","type":"Selection"},"selection_policy":{"id":"96201","type":"UnionRenderers"}},"id":"96179","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"96142","type":"ColumnDataSource"},"glyph":{"id":"96143","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"96144","type":"Line"},"selection_glyph":null,"view":{"id":"96146","type":"CDSView"}},"id":"96145","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"96098","type":"DataRange1d"},{"attributes":{"line_color":"orange","x":{"field":"x"},"y":{"field":"y"}},"id":"96161","type":"Line"},{"attributes":{"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"96143","type":"Line"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"96116","type":"PanTool"},{"id":"96117","type":"BoxZoomTool"},{"id":"96118","type":"WheelZoomTool"},{"id":"96119","type":"BoxSelectTool"},{"id":"96120","type":"LassoSelectTool"},{"id":"96121","type":"UndoTool"},{"id":"96122","type":"RedoTool"},{"id":"96123","type":"ResetTool"},{"id":"96124","type":"SaveTool"},{"id":"96125","type":"HoverTool"}]},"id":"96126","type":"Toolbar"},{"attributes":{},"id":"96176","type":"UnionRenderers"}],"root_ids":["96207"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"61ac3670-a202-4f7a-a091-8a43c17970f0","roots":{"96207":"f6d3c429-aedc-47ee-a0a0-082eabb8c6f8"}}];
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