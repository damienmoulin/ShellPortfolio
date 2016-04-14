<?php
/**
 * Created by PhpStorm.
 * User: damien
 * Date: 01/04/16
 * Time: 12:28
 */

namespace ShellPortfolioBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

/**
 * @Route("/")
 */
class ShellDisplayController extends Controller
{
    /**
     * @Route("/", name="shell_index")
     */
    public function indexAction()
    {
        return $this->render('ShellDisplay/index.html.twig');
    }

    /**
     * @Route("command/{command}", name="shell_command")
     */
    public function commandAction($command)
    {
        dump($command);
        return true;
    }
}