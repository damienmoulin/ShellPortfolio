<?php
/**
 * Created by PhpStorm.
 * User: damien
 * Date: 25/11/16
 * Time: 13:36
 */

namespace AppBundle\Controller;


use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route("/command")
 */
class CommandController extends Controller
{
    /**
     * @param $command
     * @return Response
     * @Route("/{command}", name="appbundle_command_get")
     */
    public function getAction($command)
    {

        $response = $command.' : commande introuvable';

        $get = $this->getDoctrine()->getRepository('AppBundle:Command')
            ->findOneBy(
                [
                    'command' => $command
                ]
            );

        if (isset($get)) {
            $response = $get->getResponse();
        }

        return new Response($response);
    }
}