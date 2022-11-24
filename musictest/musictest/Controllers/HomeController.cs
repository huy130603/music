using musictest.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace musictest.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        public ActionResult Home()
        {
            return View();
        }

        public ActionResult Library()
        {
            return View();
        }

        public ActionResult Search()
        {
            return View();

        }
        public ActionResult Home1()
        {
            return View();
        }
        public ActionResult NV()
        {
            return View();
        }
        public ActionResult NP()
        {
            return View();
        }
        public ActionResult NR()
        {
            return View();
        }
        public ActionResult Rap()
        {
            return View();
        }
        public ActionResult USUK()
        {
            return View();
        }
        public ActionResult CD()
        {
            return View();
        }
        private LoginEntities2 database = new LoginEntities2();
        // GET: Users
        [HttpGet]
        public ActionResult Register()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Register(Login cust)
        {
            if (ModelState.IsValid)
            {
                if (string.IsNullOrEmpty(cust.NameCus))
                    ModelState.AddModelError(string.Empty, "Tên đăng nhập không được để trống");
            if (string.IsNullOrEmpty(cust.PassCus))
                    ModelState.AddModelError(string.Empty, "Mật khẩu không được để trống");
            if (string.IsNullOrEmpty(cust.EmailCus))
                    ModelState.AddModelError(string.Empty, "Email không được để trống");
            if (string.IsNullOrEmpty(cust.PhoneCus))
                    ModelState.AddModelError(string.Empty, "Điện thoại không được để trống");
               }
            //Kiểm tra xem có người nào đã đăng kí với tên đăng nhập này hay chưa
             var khachhang = database.Logins.FirstOrDefault(k =>
            k.NameCus == cust.NameCus);
            if (khachhang != null)
                ModelState.AddModelError(string.Empty, "Đã có người đăng kí tên này");
              if (ModelState.IsValid)
            {
                database.Logins.Add(cust);
                database.SaveChanges();
            }
            else
            {
                return View();
            }
             return RedirectToAction("Login");
        }

        [HttpGet]
        public ActionResult Login()
        {
            return View();
        }
        [HttpPost]
        public ActionResult Login(Login cust)
        {
            if (ModelState.IsValid)
            {
                if (string.IsNullOrEmpty(cust.NameCus))
                    ModelState.AddModelError(string.Empty, "Tên đăng nhập không được để trống");
                if (string.IsNullOrEmpty(cust.PassCus))
                    ModelState.AddModelError(string.Empty, "Mật khẩu không được để trống");
                if (ModelState.IsValid)
                {
                    var khachhang = database.Logins.
                        FirstOrDefault(k => k.NameCus == cust.NameCus && k.PassCus == cust.PassCus);
                    if (khachhang != null)
                    {
                        Session["TaiKhoan"] = khachhang;
                        return RedirectToAction("Home1");
                    }
                    else
                        ViewBag.ThongBao = "Tên đăng nhập và mật khẩu không đúng";
                }
            }
            if (ModelState.IsValid)
            {

            }
            return View();
        }
        [HttpGet]
        public ActionResult Logout()
        {
            Session.Clear();
            return RedirectToAction("Login");
        }
        [HttpPost]
        public ActionResult Logout(Login cust)
        {
            if (ModelState.IsValid)
            {
                var khachhang = database.Logins.
                        FirstOrDefault(k => k.NameCus == cust.NameCus && k.PassCus == cust.PassCus);
            }
            return RedirectToAction("Login");
        }
    }

}






        