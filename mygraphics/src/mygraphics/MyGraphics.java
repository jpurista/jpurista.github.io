/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package mygraphics;
import javax.swing.JFrame;
/**
 *
 * @author wristersl
 */


public class MyGraphics extends JFrame
{
	private static final int WIDTH = 1450;
	private static final int HEIGHT = 850;
	private static PracticeGraphics myg;
	public MyGraphics()
	{
		super("Graphics Runner");
		setSize(WIDTH,HEIGHT);
						
		myg = new PracticeGraphics();				
		getContentPane().add(myg);
				
		setVisible(true);
	}
	
	public static void main( String args[] )
	{
		MyGraphics run = new MyGraphics();
		for (int k=0; k<300; k++)
		{
			myg.draw();
				for(int i=0; i<30000; i++)
					for(int j=0; j<30000; j++)
						for(int l=0; l<30000; l++)
						{
						}
		}
		
	}
}