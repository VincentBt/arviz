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
      };var element = document.getElementById("6356e2ca-4e1d-4553-9cd2-c0de64fe3f00");
      if (element == null) {
        console.error("Bokeh: ERROR: autoload.js configured with elementid '6356e2ca-4e1d-4553-9cd2-c0de64fe3f00' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"8bc1634b-556c-47d9-97b7-1b4719ecf69e":{"roots":{"references":[{"attributes":{},"id":"114048","type":"BasicTickFormatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114049","type":"BoxAnnotation"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114005","type":"Circle"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114050","type":"BoxAnnotation"},{"attributes":{},"id":"113970","type":"LinearScale"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114051","type":"PolyAnnotation"},{"attributes":{"children":[[{"id":"113923","subtype":"Figure","type":"Plot"},0,0],[{"id":"113963","subtype":"Figure","type":"Plot"},0,1]]},"id":"114057","type":"GridBox"},{"attributes":{"dimension":1,"ticker":{"id":"113938","type":"BasicTicker"}},"id":"113941","type":"Grid"},{"attributes":{},"id":"114052","type":"UnionRenderers"},{"attributes":{"callback":null},"id":"113964","type":"DataRange1d"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"TOY7mm62yD9I3tS4V+rMP7gbLMPg7Mo/HHCIRHVOzT9orzckCyTOP1wEFcjrLsw/GFjIBtNVyz+IfM+LFJ/NP2h6CcmRC8w/eFWrsUlMzD9YsRCvESnPPzD6BbtRL9Q/bGdUYzXr0j8AebTCVJLRP+D0hUiIM80/eDGzGTRz0z8oEF3N8onTPzjOhQa9ItQ/kLBgWUSo1j8gMD3n4GLXPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114040","type":"Selection"},"selection_policy":{"id":"114039","type":"UnionRenderers"}},"id":"114003","type":"ColumnDataSource"},{"attributes":{},"id":"114053","type":"Selection"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"jQwCEA1Gsz9bBMLb9PjIP1Qd9Zram7E/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/K7IlFT1uZP8rsiUVPW5k/yuyJRU9bmT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/84rNVf5ipT/zis1V/mKlP/OKzVX+YqU/aF85wG2piz9oXznAbamLP2hfOcBtqYs/aF85wG2piz9oXznAbamLP2hfOcBtqYs/pI3yRkqEyT9c/+ob+nG6P4OiBeyjALU/mx4fY+a33D9wF2c1cbTRPy51Aws2htg/P07TEgOYwz9FOncTGHy5P/BQ+ANPucc/uRO6PYJJzj9CRCWTDYpmP+UvVnGFsrI/8JR71fNwcj8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114042","type":"Selection"},"selection_policy":{"id":"114041","type":"UnionRenderers"}},"id":"114012","type":"ColumnDataSource"},{"attributes":{},"id":"114054","type":"UnionRenderers"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114035","type":"BasicTickFormatter"},"ticker":{"id":"113938","type":"BasicTicker"}},"id":"113937","type":"LinearAxis"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114004","type":"Circle"},{"attributes":{"overlay":{"id":"114036","type":"BoxAnnotation"}},"id":"113943","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"113982","type":"PanTool"},{"id":"113983","type":"BoxZoomTool"},{"id":"113984","type":"WheelZoomTool"},{"id":"113985","type":"BoxSelectTool"},{"id":"113986","type":"LassoSelectTool"},{"id":"113987","type":"UndoTool"},{"id":"113988","type":"RedoTool"},{"id":"113989","type":"ResetTool"},{"id":"113990","type":"SaveTool"},{"id":"113991","type":"HoverTool"}]},"id":"113992","type":"Toolbar"},{"attributes":{},"id":"113938","type":"BasicTicker"},{"attributes":{},"id":"114055","type":"Selection"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.17824444314769777},"id":"114009","type":"Span"},{"attributes":{"data_source":{"id":"114012","type":"ColumnDataSource"},"glyph":{"id":"114011","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114014","type":"CDSView"}},"id":"114013","type":"GlyphRenderer"},{"attributes":{"tools":[{"id":"113942","type":"PanTool"},{"id":"113943","type":"BoxZoomTool"},{"id":"113944","type":"WheelZoomTool"},{"id":"113945","type":"BoxSelectTool"},{"id":"113946","type":"LassoSelectTool"},{"id":"113947","type":"UndoTool"},{"id":"113948","type":"RedoTool"},{"id":"113949","type":"ResetTool"},{"id":"113950","type":"SaveTool"},{"id":"113951","type":"HoverTool"},{"id":"113982","type":"PanTool"},{"id":"113983","type":"BoxZoomTool"},{"id":"113984","type":"WheelZoomTool"},{"id":"113985","type":"BoxSelectTool"},{"id":"113986","type":"LassoSelectTool"},{"id":"113987","type":"UndoTool"},{"id":"113988","type":"RedoTool"},{"id":"113989","type":"ResetTool"},{"id":"113990","type":"SaveTool"},{"id":"113991","type":"HoverTool"}]},"id":"114058","type":"ProxyToolbar"},{"attributes":{},"id":"113933","type":"BasicTicker"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114011","type":"Dash"},{"attributes":{"toolbar":{"id":"114058","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"114059","type":"ToolbarBox"},{"attributes":{},"id":"113928","type":"LinearScale"},{"attributes":{"ticker":{"id":"113933","type":"BasicTicker"}},"id":"113936","type":"Grid"},{"attributes":{"children":[{"id":"114059","type":"ToolbarBox"},{"id":"114057","type":"GridBox"}]},"id":"114060","type":"Column"},{"attributes":{"source":{"id":"114012","type":"ColumnDataSource"}},"id":"114014","type":"CDSView"},{"attributes":{"overlay":{"id":"114049","type":"BoxAnnotation"}},"id":"113983","type":"BoxZoomTool"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114033","type":"BasicTickFormatter"},"ticker":{"id":"113933","type":"BasicTicker"}},"id":"113932","type":"LinearAxis"},{"attributes":{"callback":null,"overlay":{"id":"114037","type":"BoxAnnotation"}},"id":"113945","type":"BoxSelectTool"},{"attributes":{"text":"tau"},"id":"114015","type":"Title"},{"attributes":{},"id":"113930","type":"LinearScale"},{"attributes":{"callback":null,"overlay":{"id":"114038","type":"PolyAnnotation"}},"id":"113946","type":"LassoSelectTool"},{"attributes":{},"id":"113942","type":"PanTool"},{"attributes":{"callback":null,"data":{"x":{"__ndarray__":"mpmZmZmZqT/SjhUII+24P2wor6G8hsI/bolTv+eWyD9w6vfcEqfOP7klTv2eW9I/O1YgjLRj1T+8hvIaymvYPz23xKnfc9s/vueWOPV73j8gjLRjBcLgP2GkHSsQRuI/oryG8hrK4z/i1O+5JU7lPyPtWIEw0uY/YwXCSDtW6D+kHSsQRtrpP+U1lNdQXus/JU79nlvi7D9mZmZmZmbuPw==","dtype":"float64","shape":[20]},"y":{"__ndarray__":"7qx+MbH82z8taAlcwdPMP2RFpmpIiMs/VPd+dISI1j+QjUmxOK7VPyhwmz5eQNE/YHF86U9Izz8YN/msnr7PPyjO/sTiTs8/LFXTKecq0z/kTaFlAynUP2DJI4UMO84/IGLXJUgNzD8wUKgDDerNPxDSzcUXbc4/kDNyJsikyj/wFHev55XOP4Bvij2VrsQ/4I8dAXxLyD+Ad8zwRu/RPw==","dtype":"float64","shape":[20]}},"selected":{"id":"114053","type":"Selection"},"selection_policy":{"id":"114052","type":"UnionRenderers"}},"id":"114017","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"113972","type":"LinearAxis"}],"center":[{"id":"113976","type":"Grid"},{"id":"113981","type":"Grid"}],"left":[{"id":"113977","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114020","type":"GlyphRenderer"},{"id":"114022","type":"Span"},{"id":"114023","type":"Span"},{"id":"114024","type":"Span"},{"id":"114027","type":"GlyphRenderer"}],"title":{"id":"114029","type":"Title"},"toolbar":{"id":"113992","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"113964","type":"DataRange1d"},"x_scale":{"id":"113968","type":"LinearScale"},"y_range":{"id":"113966","type":"DataRange1d"},"y_scale":{"id":"113970","type":"LinearScale"}},"id":"113963","subtype":"Figure","type":"Plot"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"113926","type":"DataRange1d"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114018","type":"Circle"},{"attributes":{},"id":"113944","type":"WheelZoomTool"},{"attributes":{},"id":"113984","type":"WheelZoomTool"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"114019","type":"Circle"},{"attributes":{"data_source":{"id":"114017","type":"ColumnDataSource"},"glyph":{"id":"114018","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114019","type":"Circle"},"selection_glyph":null,"view":{"id":"114021","type":"CDSView"}},"id":"114020","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"113924","type":"DataRange1d"},{"attributes":{"source":{"id":"114017","type":"ColumnDataSource"}},"id":"114021","type":"CDSView"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114010","type":"Span"},{"attributes":{"ticker":{"id":"113973","type":"BasicTicker"}},"id":"113976","type":"Grid"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.21484300137312468},"id":"114022","type":"Span"},{"attributes":{"callback":null,"overlay":{"id":"114050","type":"BoxAnnotation"}},"id":"113985","type":"BoxSelectTool"},{"attributes":{"callback":null,"overlay":{"id":"114051","type":"PolyAnnotation"}},"id":"113986","type":"LassoSelectTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":0.75},"location":0.15209716425007633},"id":"114023","type":"Span"},{"attributes":{"line_alpha":{"value":0.7},"line_width":{"value":1.5},"location":0},"id":"114024","type":"Span"},{"attributes":{"axis_label":"MCSE for quantiles","formatter":{"id":"114048","type":"BasicTickFormatter"},"ticker":{"id":"113978","type":"BasicTicker"}},"id":"113977","type":"LinearAxis"},{"attributes":{"angle":{"units":"rad","value":1.5707963267948966},"line_alpha":{"value":0.35},"size":{"units":"screen","value":8},"x":{"field":"rug_x"},"y":{"field":"rug_y"}},"id":"114025","type":"Dash"},{"attributes":{},"id":"113987","type":"UndoTool"},{"attributes":{},"id":"113978","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"rug_x":{"__ndarray__":"fV36E1z/6j89DycBWWfXP73VlTJ7YsE/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz/DwTkzkEbHP8PBOTOQRsc/w8E5M5BGxz9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/T+j2CCZ5wj9P6PYIJnnCP0/o9ggmecI/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/txiR/XzQvD+3GJH9fNC8P7cYkf180Lw/Oqay45Jr6D86SHRMZcflP7HThSU1z+I/VdSaCTtd6D9Hvab2ZmSwP8UA5kQ6d4M/0GULqag1oz+aI/Yi4T7rP55DEK8H/NA/qgGd6qjX1D+VqnS/h2ThP/UnuP7VN+Q/TGXHJdeQ2z8=","dtype":"float64","shape":[43]},"rug_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","shape":[43]}},"selected":{"id":"114055","type":"Selection"},"selection_policy":{"id":"114054","type":"UnionRenderers"}},"id":"114026","type":"ColumnDataSource"},{"attributes":{"dimension":1,"ticker":{"id":"113978","type":"BasicTicker"}},"id":"113981","type":"Grid"},{"attributes":{},"id":"113988","type":"RedoTool"},{"attributes":{"data_source":{"id":"114026","type":"ColumnDataSource"},"glyph":{"id":"114025","type":"Dash"},"hover_glyph":null,"muted_glyph":null,"view":{"id":"114028","type":"CDSView"}},"id":"114027","type":"GlyphRenderer"},{"attributes":{},"id":"113982","type":"PanTool"},{"attributes":{"source":{"id":"114026","type":"ColumnDataSource"}},"id":"114028","type":"CDSView"},{"attributes":{},"id":"113990","type":"SaveTool"},{"attributes":{"text":"mu"},"id":"114029","type":"Title"},{"attributes":{"source":{"id":"114003","type":"ColumnDataSource"}},"id":"114007","type":"CDSView"},{"attributes":{"callback":null},"id":"113951","type":"HoverTool"},{"attributes":{},"id":"113989","type":"ResetTool"},{"attributes":{"callback":null},"id":"113991","type":"HoverTool"},{"attributes":{},"id":"114033","type":"BasicTickFormatter"},{"attributes":{},"id":"114035","type":"BasicTickFormatter"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"113942","type":"PanTool"},{"id":"113943","type":"BoxZoomTool"},{"id":"113944","type":"WheelZoomTool"},{"id":"113945","type":"BoxSelectTool"},{"id":"113946","type":"LassoSelectTool"},{"id":"113947","type":"UndoTool"},{"id":"113948","type":"RedoTool"},{"id":"113949","type":"ResetTool"},{"id":"113950","type":"SaveTool"},{"id":"113951","type":"HoverTool"}]},"id":"113952","type":"Toolbar"},{"attributes":{},"id":"113947","type":"UndoTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114036","type":"BoxAnnotation"},{"attributes":{},"id":"113948","type":"RedoTool"},{"attributes":{"line_alpha":{"value":0.5},"line_width":{"value":1.5},"location":0.2515582690238711},"id":"114008","type":"Span"},{"attributes":{"data_source":{"id":"114003","type":"ColumnDataSource"},"glyph":{"id":"114004","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"114005","type":"Circle"},"selection_glyph":null,"view":{"id":"114007","type":"CDSView"}},"id":"114006","type":"GlyphRenderer"},{"attributes":{},"id":"113968","type":"LinearScale"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"114037","type":"BoxAnnotation"},{"attributes":{"callback":null,"end":1,"start":-0.05},"id":"113966","type":"DataRange1d"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"xs_units":"screen","ys_units":"screen"},"id":"114038","type":"PolyAnnotation"},{"attributes":{},"id":"114039","type":"UnionRenderers"},{"attributes":{},"id":"113949","type":"ResetTool"},{"attributes":{},"id":"113950","type":"SaveTool"},{"attributes":{},"id":"114040","type":"Selection"},{"attributes":{},"id":"114041","type":"UnionRenderers"},{"attributes":{},"id":"113973","type":"BasicTicker"},{"attributes":{"below":[{"id":"113932","type":"LinearAxis"}],"center":[{"id":"113936","type":"Grid"},{"id":"113941","type":"Grid"}],"left":[{"id":"113937","type":"LinearAxis"}],"output_backend":"webgl","plot_height":331,"plot_width":496,"renderers":[{"id":"114006","type":"GlyphRenderer"},{"id":"114008","type":"Span"},{"id":"114009","type":"Span"},{"id":"114010","type":"Span"},{"id":"114013","type":"GlyphRenderer"}],"title":{"id":"114015","type":"Title"},"toolbar":{"id":"113952","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"113924","type":"DataRange1d"},"x_scale":{"id":"113928","type":"LinearScale"},"y_range":{"id":"113926","type":"DataRange1d"},"y_scale":{"id":"113930","type":"LinearScale"}},"id":"113923","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"114042","type":"Selection"},{"attributes":{"axis_label":"Quantile","formatter":{"id":"114046","type":"BasicTickFormatter"},"ticker":{"id":"113973","type":"BasicTicker"}},"id":"113972","type":"LinearAxis"},{"attributes":{},"id":"114046","type":"BasicTickFormatter"}],"root_ids":["114060"]},"title":"Bokeh Application","version":"1.4.0"}}';
                  var render_items = [{"docid":"8bc1634b-556c-47d9-97b7-1b4719ecf69e","roots":{"114060":"6356e2ca-4e1d-4553-9cd2-c0de64fe3f00"}}];
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