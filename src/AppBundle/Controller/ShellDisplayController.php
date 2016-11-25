<?php
/**
 * Created by PhpStorm.
 * User: damien
 * Date: 01/04/16
 * Time: 12:28
 */

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

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

}