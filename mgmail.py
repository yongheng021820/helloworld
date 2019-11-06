#!/usr/bin/python2.6
#coding:utf-8

import smtplib
import urllib
import time

def sendmail():
    #mail_to = smtplib.SMTP('smtp.126.com',25)    
    mail_to = smtplib.SMTP('smtp.qq.com',25)      #设置邮件发送服务器
    mail_to.login("775709548@qq.com","arpkzhnpfzvgbdib")      #设置发送邮件的帐号,授权码
    msg = """From: system <775709548@qq.com>    
			To: <775709548@qq.com>
			Subject: webserver_down

			内网签发服务故障
		"""
    mail_to.sendmail('775709548@qq.com','775709548@qq.com',msg)
    mail_to.close()



if __name__ == '__main__':
    print time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),'server monitor is running'
    while 1:
        count=0
        error_status_count=0
        while count<3:
            time.sleep(2)      #每隔5秒监控一次服务器
            try:
                status=urllib.urlopen("http://59.202.29.132:8080/caconsole").code   #收集监控网址的网页状态码
                if status==200:
                    print time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),'web server is functional'
                if status<>200:
                    error_status_count+=1  
                    print time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),'web servier is down ,error status count:',error_status_count,'status number',status
            except:
                error_status_count+=1    #网页状态错误次数进行累加
                print time.strftime("%Y-%m-%d %H:%M:%S", time.localtime()),'web servier is down ,error status count:',error_status_count
            count+=1
        if error_status_count>=3: #网页状态错误超过3次自动发送报警邮件
            print 'error status count is :',error_status_count,'sending email,the program wiil try to monint the server after half an hour'
            send_count = 0
            sendmail()
            send_count +
            while send_count>=3:
            	time.sleep(60) 
            	send_count=0 