

import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Validate
 */
@WebServlet("/Validate")
public class Validate extends HttpServlet {
	private static final long serialVersionUID = 1L;
  
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException  { String name=request.getParameter("user"); String pass=request.getParameter("pass");
	int flag = 0; try { Class.forName("com.mysql.cj.jdbc.Driver"); 
	Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/webpage", "root", "12341234"); 
	java.sql.Statement ps = con.createStatement(); 
	ResultSet rs = ps.executeQuery("select * from login"); 
	
	while(rs.next()) { if(rs.getString(1).compareTo(name)==0 && rs.getString(2).compareTo(pass)==0) { 
		 
		 
		flag = 1; break;
		} } if(flag==1) {
			RequestDispatcher rd = request.getRequestDispatcher("index.html"); rd.forward(request, response); 
			} else  {  response.sendRedirect("login1.html");  } 
		con.close(); } 
	catch (Exception e)  { e.printStackTrace();
	}  }

}
