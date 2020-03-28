;(window['webpackJsonpreact-leaflet-playground'] =
  window['webpackJsonpreact-leaflet-playground'] || []).push([
  [0],
  {
    44: function (e, a, t) {
      e.exports = t.p + 'static/media/logo.5d5d9eef.svg'
    },
    54: function (e, a, t) {
      e.exports = t(67)
    },
    59: function (e, a, t) {},
    60: function (e, a, t) {},
    67: function (e, a, t) {
      'use strict'
      t.r(a)
      var n = t(0),
        l = t.n(n),
        r = t(9),
        o = t.n(r),
        c = (t(59), t(20)),
        i = t(44),
        s = t.n(i),
        m = (t(60), t(45)),
        u = t.n(m),
        p = t(106),
        d = t(109),
        g = t(111),
        b = t(103),
        E = t(68),
        f = t(112),
        v = t(115),
        h = t(108),
        y = t(105),
        w = t(107),
        x = Object(b.a)(function (e) {
          return {
            '@global': { body: { backgroundColor: e.palette.common.white } },
            paper: {
              marginTop: e.spacing(8),
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main
            },
            form: { width: '100%', marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
            group: { margin: e.spacing(1, 0) }
          }
        }),
        j = function (e) {
          var a = Object(n.useState)(''),
            t = Object(c.a)(a, 2),
            r = t[0],
            o = t[1],
            i = Object(n.useState)(''),
            s = Object(c.a)(i, 2),
            m = s[0],
            u = s[1],
            b = Object(n.useState)(''),
            j = Object(c.a)(b, 2),
            O = j[0],
            C = j[1],
            S = Object(n.useState)(''),
            k = Object(c.a)(S, 2),
            B = k[0],
            A = k[1],
            M = l.a.useState('A'),
            N = Object(c.a)(M, 2),
            z = N[0],
            W = N[1],
            q = x()
          return l.a.createElement(
            y.a,
            { component: 'fieldset' },
            l.a.createElement(
              E.a,
              { variant: 'h6', gutterBottom: !0 },
              'Enter address'
            ),
            l.a.createElement(
              p.a,
              { container: !0, spacing: 3 },
              l.a.createElement(
                p.a,
                { item: !0, xs: 12 },
                l.a.createElement(g.a, {
                  required: !0,
                  id: 'address1',
                  name: 'address1',
                  label: 'Address',
                  value: r,
                  fullWidth: !0,
                  autoComplete: 'billing address-line1',
                  onChange: function (e) {
                    return o(e.target.value)
                  }
                })
              ),
              l.a.createElement(
                p.a,
                { item: !0, xs: 12, sm: 6 },
                l.a.createElement(g.a, {
                  required: !0,
                  id: 'city',
                  name: 'city',
                  label: 'City',
                  value: m,
                  fullWidth: !0,
                  autoComplete: 'billing address-level2',
                  onChange: function (e) {
                    return u(e.target.value)
                  }
                })
              ),
              l.a.createElement(
                p.a,
                { item: !0, xs: 12, sm: 6 },
                l.a.createElement(g.a, {
                  id: 'state',
                  name: 'state',
                  label: 'State/Province/Region',
                  value: O,
                  fullWidth: !0,
                  onChange: function (e) {
                    return C(e.target.value)
                  }
                })
              ),
              l.a.createElement(
                p.a,
                { item: !0, xs: 12, sm: 6 },
                l.a.createElement(g.a, {
                  required: !0,
                  id: 'zip',
                  name: 'zip',
                  label: 'Zip / Postal code',
                  value: B,
                  fullWidth: !0,
                  autoComplete: 'billing postal-code',
                  onChange: function (e) {
                    return A(e.target.value)
                  }
                })
              ),
              l.a.createElement(
                p.a,
                { item: !0, xs: 12, sm: 6 },
                l.a.createElement(w.a, { component: 'legend' }, 'Base Map'),
                l.a.createElement(
                  v.a,
                  {
                    'aria-label': 'base map',
                    name: 'baseMap',
                    className: q.group,
                    value: z,
                    onChange: function (e) {
                      return W(e.target.value)
                    }
                  },
                  l.a.createElement(h.a, {
                    value: 'A',
                    control: l.a.createElement(f.a, null),
                    label: 'Base Map A'
                  }),
                  l.a.createElement(h.a, {
                    value: 'B',
                    control: l.a.createElement(f.a, null),
                    label: 'Base Map B'
                  }),
                  l.a.createElement(h.a, {
                    value: 'C',
                    control: l.a.createElement(f.a, null),
                    label: 'Base Map C'
                  })
                )
              ),
              l.a.createElement(
                p.a,
                { item: !0, xs: 12, sm: 12 },
                l.a.createElement(
                  d.a,
                  {
                    type: 'submit',
                    fullWidth: !0,
                    variant: 'contained',
                    color: 'primary',
                    className: q.submit,
                    onClick: function (a) {
                      a.preventDefault(), e.getFormValues(r, m, O, B, z)
                    }
                  },
                  'Submit'
                )
              )
            )
          )
        },
        O = t(114),
        C = t(113),
        S = t(110),
        k = t(117),
        B = function (e) {
          var a = [e.lat, e.lng]
          return l.a.createElement(
            O.a,
            { center: a, zoom: Number(e.zoom) },
            l.a.createElement(C.a, {
              attribution:
                '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
              url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            }),
            l.a.createElement(
              S.a,
              { position: a },
              l.a.createElement(
                k.a,
                null,
                '#4 Private Drive ',
                l.a.createElement('br', null),
                ' Ocean Isle Beach, NC.'
              )
            )
          )
        },
        A = t(46),
        M = t.n(A),
        N = Object(b.a)(function (e) {
          return {
            root: { flexGrow: 1 },
            paper: {
              padding: e.spacing(2),
              textAlign: 'center',
              color: e.palette.text.secondary
            }
          }
        }),
        z = function () {
          M.a.config()
          var e = Object(n.useState)(-85),
            a = Object(c.a)(e, 2),
            t = a[0],
            r = a[1],
            o = Object(n.useState)(34),
            i = Object(c.a)(o, 2),
            m = i[0],
            d = i[1],
            g = N()
          return l.a.createElement(
            'div',
            { className: 'App' },
            l.a.createElement(
              'div',
              { className: g.root },
              l.a.createElement(
                p.a,
                { container: !0, style: { padding: 10 }, spacing: 1 },
                l.a.createElement(
                  p.a,
                  { item: !0, xs: 12, sm: 12 },
                  l.a.createElement(
                    'header',
                    { className: 'App-header' },
                    l.a.createElement('img', {
                      src: s.a,
                      className: 'App-logo',
                      alt: 'logo'
                    }),
                    l.a.createElement(
                      'p',
                      null,
                      'Simple react-leaflet example created with create-react-app.'
                    )
                  )
                ),
                l.a.createElement(
                  p.a,
                  { item: !0, xs: 12, sm: 4 },
                  l.a.createElement(j, {
                    getFormValues: function (e, a, t, n, l) {
                      u()(
                        'https://www.mapquestapi.com/geocoding/v1/address?key='
                          .concat(
                            '8SklnM7QrMDyxrSAGzwibn3ukb6f9yCs',
                            '&inFormat=kvp&outFormat=json&location='
                          )
                          .concat(e, '+')
                          .concat(a, '+')
                          .concat(t, '+')
                          .concat(n, '&thumbMaps=false')
                      )
                        .then(function (e) {
                          return e.json()
                        })
                        .then(function (e) {
                          r(e.results[0].locations[0].displayLatLng.lng),
                            d(e.results[0].locations[0].displayLatLng.lat),
                            console.log(l)
                        })
                    }
                  })
                ),
                l.a.createElement(
                  p.a,
                  { item: !0, xs: 12, sm: 8 },
                  l.a.createElement(B, { lat: m, lng: t, zoom: '13' })
                )
              )
            )
          )
        }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      )
      o.a.render(l.a.createElement(z, null), document.getElementById('root')),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready.then(function (e) {
            e.unregister()
          })
    }
  },
  [[54, 1, 2]]
])
//# sourceMappingURL=main.84d6f7ca.chunk.js.map
