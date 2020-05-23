/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mygraphics;

import java.awt.*;
import javax.swing.JPanel;


public class PracticeGraphics extends JPanel {

    private int j;

    public PracticeGraphics() {
        j = 0;
        setBackground(Color.BLACK);
        setVisible(true);
    }

    public void draw() {
        repaint();
    }
    
    public void paintComponent(Graphics window) {
        super.paintComponent(window);
        j++;

        //draws the green part of the tree (triangle)
        window.setColor(new Color(0, 100, 0));
        Polygon tree = new Polygon();
        tree.addPoint(700, 75);
        tree.addPoint(850, 695);
        tree.addPoint(550, 695);
        window.fillPolygon(tree);
        
        //draws star at the top of the tree
        window.setColor(new Color(255, 243, 79));
        Polygon star = new Polygon();
        star.addPoint(702, 38);
        star.addPoint(710, 63);
        star.addPoint(733, 70);
        star.addPoint(712, 80);
        star.addPoint(720, 105);
        star.addPoint(700, 85);
        star.addPoint(675, 102);
        star.addPoint(686, 75);
        star.addPoint(669, 58);
        star.addPoint(692, 61);
        star.addPoint(702, 38);
        window.fillPolygon(star);
        
        //draws the tree trunk
        window.setColor(new Color(108, 53, 0));
        window.fillRect(650,695,100,85);
        
        //draws the ground (snow)
        window.setColor(Color.WHITE);
        window.fillRect(0,780,1495,850);
        
        //makes white ornaments
        window.setColor(Color.WHITE);
        window.fillOval(690, 250, 32, 32);   
        window.fillOval(730, 375, 35, 35);
        window.fillOval(615, 500, 35, 35);
        window.fillOval(700, 600, 40, 40);
        
        //makes red ornaments
        window.setColor( new Color(255, 40, 40));
        window.fillOval(685, 195, 32, 32);
        window.fillOval(650, 330, 35, 35);
        window.fillOval(675, 385, 35, 35);
        window.fillOval(695, 530, 35, 35);
        window.fillOval(760, 555, 42, 42);
        window.fillOval(585, 600, 45, 45);
        window.fillOval(655, 625, 40, 40);   
        
        //makes random color ornamanets
        int [] [] myColors = {{212, 175, 55},{170, 169, 173},{251, 238, 228},{230, 230, 230},{35, 59, 140}};
        int row = (int) (Math.random() * 5);
        window.setColor(new Color(myColors[row][0], myColors[row][1], myColors[row][2])); 
        window.fillOval(708, 315, 35, 35);   
        row = (int) (Math.random() * 5);
        window.setColor(new Color(myColors[row][0], myColors[row][1], myColors[row][2]));        
        window.fillOval(650, 560, 45, 45); 
        row = (int) (Math.random() * 5);
        window.setColor(new Color(myColors[row][0], myColors[row][1], myColors[row][2])); 
        window.fillOval(648, 430, 35, 35);
        row = (int) (Math.random() * 5);
        window.setColor(new Color(myColors[row][0], myColors[row][1], myColors[row][2]));        
        window.fillOval(765, 612, 45, 45);
        row = (int) (Math.random() * 5);
        window.setColor(new Color(myColors[row][0], myColors[row][1], myColors[row][2]));        
        window.fillOval(710, 475, 37, 37);
        

        //flashing text "Merry Christmas"
        if (j % 6 == 0) {
            window.setColor(Color.WHITE);
            window.setFont(new Font("HELVETICA", Font.ITALIC, 80));
            window.drawString("Merry Christmas", 40, 100);
        } else {
            window.setColor(new Color(255, 40, 40));
            window.setFont(new Font("HELVETICA", Font.ITALIC, 80));
            window.drawString("Merry Christmas", 40, 100);
        } 
                //adds falling snow
        window.setColor(Color.WHITE);
        if((j % 5 == 0) || (j % 3 == 0) || (j % 1 == 0)){
            for(int i = 0; i < 125; i++){
                int scWidth = (int)(Math.random() * 1450);
                int scHeight = (int)(Math.random() * 780);
                window.fillOval(scWidth, scHeight, 10, 10);
            }
        }
        
    }
}

// black, blue, cyan, darkGray, gray, green, lightGray, magenta, orange, pink, red, white, yellow. 
// Mix red and blue: range is 0-255
//window.setColor (new Color (255, 0, 255));

//drawString(String str, int x, int y) 
//Draws the text given by the specified string, using this graphics context's current font and color.
//window.drawString(" What's Up!",20,30); // what i want to print and the x and y

//fillRect(int x, int y, int width, int height) 
//Fills the specified rectangle.
//drawRect(int x, int y, int width, int height) 
//Draws the outline of the specified rectangle.
//window.setColor(Color.BLACK);
//window.drawRect(500,400,100,200);
//fillOval(int x, int y, int width, int height) 
//Fills an oval bounded by the specified rectangle with the current color.

//drawOval(int x, int y, int width, int height) 
//Draws the outline of an oval.
//window.setColor(Color.WHITE);
//window.drawOval(300,100,100,100);
//drawString(String str, int x, int y) 
//Draws the text given by the specified string, using this graphics context's current font and color.
//window.drawString("MERRY CHRISTMAS!",20,65);

//clearRect(int x, int y, int width, int height) 
//Clears the specified rectangle by filling it with the background color of the current drawing surface. 	
//drawLine(int x1, int y1, int x2, int y2) 
//Draws a line, using the current color, between the points (x1, y1) and (x2, y2) in this graphics context's coordinate system.
//drawRoundRect(int x, int y, int width, int height, int arcWidth, int arcHeight) 
//Draws an outlined round-cornered rectangle using this graphics context's current color.
//Fills the specified rounded corner rectangle with the current color. 
//window.drawArc(-50,0,700,200,-45,-70);
//Draws the outline of a circular or elliptical arc covering the specified rectangle.
//fillArc(int x, int y, int width, int height, int startAngle, int arcAngle) 
//Fills a circular or elliptical arc covering the specified rectangle.