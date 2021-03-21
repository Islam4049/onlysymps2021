import React from "react";

const styles = {
	foot: {
		backgroundColor: "navy",
		color: "white"
	}
}

const Footer = () => (
	<footer style={styles.foot} className="page-footer">
		<div className="container-fluid text-center">
		<small style={styles.foot}>OnlySymps (2021) &copy; copyright reserved</small>
		</div>
		<div class="social-media">
                <div class="social-media-title">
                    <h4>CONNECT WITH US</h4>
                </div>
                    
                <div class="social-media-links">
                    <ul>
                        <li>
                            <a href="https://www.facebook.com/">
                                <span class="icon-social-facebook"></span>
                                <span>FACEBOOK</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://twitter.com/">
                                <span class="icon-social-twitter"></span>
                                <span>TWITTER</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://instagram.com/">
                                <span class="icon-social-instagram"></span>
                                <span>INSTAGRAM</span>
                            </a>
                        </li>
                        <li>
                            <a href="http://www.youtube.com/user/">
                                <span class="icon-social-youtube"></span>
                                <span>YOUTUBE</span>
                            </a>
                        </li>
						<li>
                            
                        </li>
                        
                        <li>
                            <a href="/feeds/">
                                <span class="icon-social-feed"></span>
                                <span>RSS FEED</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

	</footer>
);

export default Footer;