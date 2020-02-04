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
      };var element = document.getElementById("464ea63f-9cc9-4795-8aeb-71dd9544b097");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '464ea63f-9cc9-4795-8aeb-71dd9544b097' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"1f8beadb-b7fa-4811-b91d-dfdc3a62ae89":{"roots":{"references":[{"attributes":{"source":{"id":"97272","type":"ColumnDataSource"}},"id":"97276","type":"CDSView"},{"attributes":{"dimension":1,"ticker":{"id":"97247","type":"BasicTicker"}},"id":"97250","type":"Grid"},{"attributes":{"source":{"id":"97277","type":"ColumnDataSource"}},"id":"97281","type":"CDSView"},{"attributes":{"callback":null},"id":"97233","type":"DataRange1d"},{"attributes":{},"id":"97239","type":"LinearScale"},{"attributes":{"fill_alpha":0.1,"fill_color":"#1f77b4","line_alpha":0.1,"line_color":"#1f77b4","x":{"field":"x"},"y":{"field":"y"}},"id":"97274","type":"Patch"},{"attributes":{"line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97278","type":"Line"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97288","type":"BoxAnnotation"},{"attributes":{"below":[{"id":"97241","type":"LinearAxis"}],"center":[{"id":"97245","type":"Grid"},{"id":"97250","type":"Grid"}],"left":[{"id":"97246","type":"LinearAxis"}],"output_backend":"webgl","plot_height":500,"plot_width":500,"renderers":[{"id":"97275","type":"GlyphRenderer"},{"id":"97280","type":"GlyphRenderer"}],"title":{"id":"97283","type":"Title"},"toolbar":{"id":"97261","type":"Toolbar"},"x_range":{"id":"97233","type":"DataRange1d"},"x_scale":{"id":"97237","type":"LinearScale"},"y_range":{"id":"97235","type":"DataRange1d"},"y_scale":{"id":"97239","type":"LinearScale"}},"id":"97232","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"97247","type":"BasicTicker"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"97289","type":"BoxAnnotation"},{"attributes":{},"id":"97291","type":"UnionRenderers"},{"attributes":{"formatter":{"id":"97287","type":"BasicTickFormatter"},"ticker":{"id":"97247","type":"BasicTicker"}},"id":"97246","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"97290","type":"PolyAnnotation"}},"id":"97255","type":"LassoSelectTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":3,"x":{"field":"x"},"y":{"field":"y"}},"id":"97279","type":"Line"},{"attributes":{},"id":"97257","type":"RedoTool"},{"attributes":{"formatter":{"id":"97285","type":"BasicTickFormatter"},"ticker":{"id":"97242","type":"BasicTicker"}},"id":"97241","type":"LinearAxis"},{"attributes":{"data_source":{"id":"97277","type":"ColumnDataSource"},"glyph":{"id":"97278","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97279","type":"Line"},"selection_glyph":null,"view":{"id":"97281","type":"CDSView"}},"id":"97280","type":"GlyphRenderer"},{"attributes":{"fill_alpha":0.5,"fill_color":"red","line_alpha":0,"line_color":"red","x":{"field":"x"},"y":{"field":"y"}},"id":"97273","type":"Patch"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"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","dtype":"float64","shape":[400]},"y":{"__ndarray__":"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","dtype":"float64","shape":[400]}},"selected":{"id":"97292","type":"Selection"},"selection_policy":{"id":"97291","type":"UnionRenderers"}},"id":"97272","type":"ColumnDataSource"},{"attributes":{"data_source":{"id":"97272","type":"ColumnDataSource"},"glyph":{"id":"97273","type":"Patch"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"97274","type":"Patch"},"selection_glyph":null,"view":{"id":"97276","type":"CDSView"}},"id":"97275","type":"GlyphRenderer"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"97251","type":"PanTool"},{"id":"97252","type":"BoxZoomTool"},{"id":"97253","type":"WheelZoomTool"},{"id":"97254","type":"BoxSelectTool"},{"id":"97255","type":"LassoSelectTool"},{"id":"97256","type":"UndoTool"},{"id":"97257","type":"RedoTool"},{"id":"97258","type":"ResetTool"},{"id":"97259","type":"SaveTool"},{"id":"97260","type":"HoverTool"}]},"id":"97261","type":"Toolbar"},{"attributes":{},"id":"97237","type":"LinearScale"},{"attributes":{},"id":"97253","type":"WheelZoomTool"},{"attributes":{},"id":"97259","type":"SaveTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"euhYzQUHAcBkgBurqHEAwF07zpxVj/+/YoesgTHs/L/5mROQ/d37v0vumwftX/i/Q6QUOJCs97/dfcs3JZv1v6XXCRFJivO/wpLgZ+Jn879ELSw4Qjjyv1giy1lLuPG/KqsqK36M8L/3FDifMUXtv8reu6AWr+y/LyGyEHtS7L+khsnLFY3pv+BHveJZ8Oi/PfAML7F26L8xr3gth5jnv9hvBII9Z+e/ChXaJsoX579MNjBIxc7mv4xWT2i5quW/b+aD9VRP5b/zwEG3tA7kv78cNa+S7OO/+GzWOaw/47+FkBcEOxLjv5qPpPna2OG/HTMfk1VE4b/ukPnUUojfvxwtPcxpxd6/MWAwdrOj3r/YxDU5TK3dvzKiHnW3c92/wfFOXD9d3b98DBbgICTdv939KF+X3Ny/5isWCPJw2r+igGRSszLavyQjbfG+A9i/FXtPyjGu179XgyVt8JTXv5mDnZCzWta//YBKsTgf1r+Qg8bG0ZTVv+VNGyjrBNO/nrmZOO6xzb9f1ZaCCWrKvz5nMRpsT8W/pz2zyq4Sw78SCuz74HLCv9p7l8TlgLy/0LeMyUsGsL9VRSMuwWqgv1AMRReQfJq/ct8yTx8jVj+Zz5pXUDm4P5uzh6X9e7o/wX2aIsYiuz+XT0s84J+/P5TFRuSmvck/DN1Ea0rzzT8tCpDwabvQPyAETwvsCNE/rkKsqnhQ0T8IwAtK2U3TP8UXUkhoGtQ/RJ4Vsh/i1T+d0Q8jBHTZP0KuoXwK/9k/UN/KBt5c2j++yFFJP6fcP4fP/7bkz9w/oC9td0jU3T+xDSTRap/eP+UEvxpVJeA/GI1ZWqQ14D8uBsHfqGzgP06oDR5z2OE/dl8SA+3F4z9lY903g97jP/m6k48UJeY/ANfmQAfF6T/Z5lNsKhrqPxq6jKdMKeo/hDpzG/J26j82gWo/9YzqP29xYEFGIu0/cf1KNCGe7T/8+CsSvKzvP1sHZP59WvI/1N772abV8z/m1Lyy+4v2P2B36Wjd5/Y/Ak6onc4q+j+fa8v3RC8BQBx+Tj7rlQJAgJb+QEpJA0A=","dtype":"float64","shape":[100]},"y":{"__ndarray__":"DC9OZfTx7T84/8iprhzvP1LimDFVOPA/T7wpP+eJ8T8EM/Y3ARHyP9oIMnwJ0PM/3q3147cp9D8SQRpkbTL1Py4Ue3fbOvY/n7YPzA5M9j9e6enj3uP2P9RuGlPaI/c/a6pq6sC59z/C+jGYs674P04I0Vc61Pg/tHfTO2Hr+D9Xng2Nupz5PwiuUIfpw/k/8cM8tFPi+T801KE03hn6Pwrkfp8wJvo/vnpJdg06+j9t8vOtTkz6P10q7KVRlfo/ZAafwiqs+j/Djy/SUvz6P9C4MlTbBPs/wmSK8RQw+z/fG/o+cTv7PxrclkHJifs/OTM4m+qu+z/izWCl9Q78P1xaeMZSJ/w/+vM5kYkr/D9lR9l4Vkr8P7orXBGJUfw/yCF2FFhU/D9wPv3je1v8P0TgGhRtZPw/gzr9vuGx/D/sb7OVqbn8P5xb0iGI//w/nRC2xjkK/T+VT1vyYQ39P41P7I2pNP0/4K/W6Rg8/T+OLyfHZU39P0OW/Jpin/0/ZmR2HOEk/j+qktZnX1n+P4zpXD4Jq/4/JsxUE9XO/j9fP0Hw0dj+PyFE29H4G/8/Qpqzoc1//z/rckf7VL7/P+d10d8Gy/8/LvP0MWIBAEA+a15B5WAAQM4elvbvaQBA92mKGItsAEA+LfGAf34AQC02IjftzQBA6CZaU5rvAECjAAmftgsBQELwtMCOEAFAK8SqigcVAUAAvKCU3TQBQHwhhYSmQQFA5Fkh+yFeAUAa/TBCQJcBQOQayqfwnwFA9a1s4M2lAUCMHJX0c8oBQPj8b0v+zAFA+tJ2h0TdAUDbQBKt9ukBQJ3gV6OqBAJAozFLi7QGAkDGIPgblQ0CQAq1wWMOOwJA70tioL14AkBtrPtm0HsCQF938pGixAJA4Noc6KA4A0DbfIpNRUMDQEOX8ZQpRQNAUGduQ95OA0AnUO2nnlEDQC4OLMhIpANArl+JJsSzA0Agf0WCl/UDQNcBmX+flgRAtfd+tmn1BEA6Na/s/qIFQNhdOlr3uQVAgBNqp7OKBkDQteV7opcIQA4/J5/1SglAQEt/IKWkCUA=","dtype":"float64","shape":[100]}},"selected":{"id":"97294","type":"Selection"},"selection_policy":{"id":"97293","type":"UnionRenderers"}},"id":"97277","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"97290","type":"PolyAnnotation"},{"attributes":{"overlay":{"id":"97288","type":"BoxAnnotation"}},"id":"97252","type":"BoxZoomTool"},{"attributes":{},"id":"97242","type":"BasicTicker"},{"attributes":{},"id":"97287","type":"BasicTickFormatter"},{"attributes":{},"id":"97256","type":"UndoTool"},{"attributes":{"callback":null},"id":"97260","type":"HoverTool"},{"attributes":{"callback":null},"id":"97235","type":"DataRange1d"},{"attributes":{},"id":"97293","type":"UnionRenderers"},{"attributes":{},"id":"97292","type":"Selection"},{"attributes":{},"id":"97258","type":"ResetTool"},{"attributes":{"text":""},"id":"97283","type":"Title"},{"attributes":{"ticker":{"id":"97242","type":"BasicTicker"}},"id":"97245","type":"Grid"},{"attributes":{"callback":null,"overlay":{"id":"97289","type":"BoxAnnotation"}},"id":"97254","type":"BoxSelectTool"},{"attributes":{},"id":"97285","type":"BasicTickFormatter"},{"attributes":{},"id":"97251","type":"PanTool"},{"attributes":{},"id":"97294","type":"Selection"}],"root_ids":["97232"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"1f8beadb-b7fa-4811-b91d-dfdc3a62ae89","roots":{"97232":"464ea63f-9cc9-4795-8aeb-71dd9544b097"}}];
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