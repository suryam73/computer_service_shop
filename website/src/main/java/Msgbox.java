

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/Msgbox")
public class Msgbox extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException   {   response.setContentType("text/html");   
	String name=request.getParameter("full-name");  
	String email=request.getParameter("email");  
	String subject=request.getParameter("subject");  
	String msg=request.getParameter("message"); 
	try {    Class.forName("com.mysql.cj.jdbc.Driver");   
	
	Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/webpage", "root", "12341234");    
	PreparedStatement ps = con.prepareStatement("insert into msgbox values(?,?,?,?)");  
	ps.setString(1, name);     
	ps.setString(2, email);   
	ps.setString(3, subject); 	ps.setString(4,msg);
	int i=ps.executeUpdate() ;    if(i==1)    {    RequestDispatcher rd = request.getRequestDispatcher("welcome.html");    rd.forward(request, response);     } 
	
	 
	   else     {     response.sendRedirect("login.html");     }    con.close();    } catch (Exception e)   {    e.printStackTrace(); 
	   } 
	}

}
