<template>
  <div class="login">
    <div class="container">
      <a href="/#/index">
        <img class="logo-img" src="/imgs/login-logo-new.png" alt />
      </a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="span-new">账号登录</span>
            <span class="span-line">|</span>
            <span class="span-new">扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入账号" v-model="username" />
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password" />
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="register">
            <div class="register-phone" @click="register">
              <a>手机短信登录/注册</a>
            </div>
            <div class="register-link">
              <a>立即注册</a>
              <span>|</span>
              <a>忘记密码&quest;</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="footer-link">
        <a href>简体</a>
        <span>|</span>

        <a href>繁体</a>
        <span>|</span>

        <a href>English</a>
        <span>|</span>

        <a href>常见问题</a>
        <span>|</span>

        <a href>隐私政策</a>

        <p class="copyright">紫荆公司版权所有-京ICP备10046444-京公网安备11010802020134号-京ICP证110507号</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      userId: "",
    };
  },

  methods: {

    // 登录方法
    login() {
      // 将username和password解构出来
      let { username, password } = this;
      this.axios
        .post("user/login", {
          username,
          password,
        })
        .then((res) => {
          // 将用户数据保存到cookie中
          this.$cookie.set("userId", res.id, { expires: "1M" });
          // to-do保存用户名
          this.$router.push("/index");
        });
    },

    // 注册方法
    register() {
      this.axios
        .post("user/register", {
          username: "reginyuan",
          password: "a54185418",
          email: "reginyuan@gmailcom",
        })
        .then(() => {
          // 将用户数据保存到cookie中
          alert("注册成功");
        });
    },
  },
};
</script>


<style lang="scss">
@import "./../assets/scss/base.scss";
.login {
  position: absolate;

  & > .container {
    height: 113px;
    img {
      width: auto;
      height: 100%;
    }
    .logo-img {
      margin-left: 100px;
      height: 98px;
      width: 200px;
    }
  }

  .wrapper {
    background: url("/imgs/login-bg-new.jpg") no-repeat center;
    .container {
      height: 576px;
      .login-form {
        position: absolute;
        box-sizing: border-box;
        margin-right: 50px;
        width: 410px;
        height: 550px;
        padding-left: 31px;
        padding-right: 31px;
        padding-top: 20px;
        background-color: #ffffff;
        right: 0;
        bottom: 0;

        h3 {
          line-height: 23px;
          font-size: 24px;
          margin: 10px auto 20px;
          text-align: center;
          span {
            color: #796b6b;
            font-weight: normal;
            letter-spacing: 5px;
            cursor: pointer;
            height: 23px;
            line-height: 23px;
          }
          .span-new:hover {
            color: #d81e06;
          }
          .span-line {
            margin: auto 20px;
          }
        }
        .input {
          display: inline-block;
          margin-bottom: 20px;
          width: 349px;
          height: 50px;
          border: 1px solid #e5e5e5;

          input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 0 40px;
          }
        }

        .btn-box {
          display: block;
          width: 349px;
          height: 50px;
          text-align: center;
          .btn {
            display: block;
            width: 100%;
            height: 50px;
            line-height: 50px;
            border: none;
            color: #ffffff;
            background-color: #d81e06;
            cursor: pointer;
          }
        }

        .register {
          text-align: center;
          .register-phone {
            color: #d81e06;
            font-size: 14px;
            margin-top: 10px;
            cursor: pointer;
          }
          .register-link {
            margin-top: 20px;
            font-size: 14px;
            color: #999999;
            cursor: pointer;
            a:hover {
              color: #d81e06;
            }
          }
        }
      }
    }
  }
  .footer {
    height: 100px;
    padding-top: 60px;
    color: #999999;
    font-size: 16px;
    text-align: center;
    background-color: #ffffff;
    border: #ffffff;
    .footer-link {
      width: 100%;
      height: 100%;
      a {
        color: #999999;
        display: inline-block;
        &:hover {
          /*设置字体为最初的颜色*/
          color: initial;
        }
      }
      span {
        margin: 0 10px;
      }
    }
    .copyright {
      margin-top: 13px;
    }
  }
}
</style>