import axios from 'axios'

export default(function () {
    function $http (arr) {
        let _ihttp = new _$ihttp()
        let _urlarr = arr || []
        for (let i = 0, len = _urlarr.length; i < len; i++) {
            let _name = $http.getPathname(_urlarr[i])
            _ihttp[_name] = function (obj) {
                _ihttp.sendMes(_urlarr[i], obj)
            }
        }
        return _ihttp
    }

    function _$ihttp () {
        // 请求的对象
        this._vueobj = {}
        // 状态管理
        this.statue = 0
    }

    _$ihttp.prototype.sendMes = function (url = '', obj = {}) {
        console.log(obj)
        let self = this
        let _data = obj.data || {}

        let _type = obj.type || 'get'

        let _success = obj.success || function () {}

        let isBlock = obj.block || true

        // 使用状态模式
        let status = {
            get: function () {
                let _qs = $http.qs(_data)
                axios.get(url + _qs)
                    .then(function (res) {
                        self.status = 0
                        console.log(self._vueobj)
                        // let _name = $http.getPathname(url)
                        // self._vueobj[_name] = res.data
                        let _result = _success.call(self._vueobj, res.data)
                        console.log(_result)
                        // 感觉没什么用
                        // if (_result) {
                        //     self._vueobj[_name] = _result
                        // } else {
                        //     self._vueobj[_name] = res.data
                        // }
                    })
            },
            post: function () {},
            put: function () {},
            delete: function () {}
        }
        console.log(_type)
        if (!isBlock || self.status === 0) {
            if (this.isBlock) {
                self.status = 1
            }

            status[_type]()
        }
    }

    _$ihttp.prototype.v = function (vueobj) {
        console.log(vueobj)
        this._vueobj = vueobj
        return this
    }

    // 获取接口
    $http.getPathname = function (url) {
        let _arr = url.split('/')
        let _name = _arr[_arr.length - 1]
        let _newname = _name.split('.')[0]

        return _newname
    }

    // 序列化
    $http.qs = function (obj) {
        let _str = ''
        if (JSON.stringify(obj) !== '{}') {
            _str += '?'
            let _len = 0
            for (var item in obj) {
                if (_len !== 0) {
                    _str += '&'
                }

                _str += item
                _str += '='
                _str += obj[item]
                _len++
            }
            return _str
        }
    }
    return $http
})()
