import { IProfile } from "@repo/types/lib/models/customer/profile";
import { RequestHandler } from "express";
import { v1Response } from "../helpers/responseHandler";
import { updateModifier } from "../helpers/updateModifier";
import { IAPIV1Response, ICRUDController } from "../types/ICRUDController";
import { ProfileServices } from "../services/customer/profile.services";
import { IQueryStringParams } from "@repo/types/lib/types";
import { ProfileService } from "../services/profile.service";

class ProfileController implements ICRUDController<IProfile> {
  create: RequestHandler<unknown, IAPIV1Response, IProfile> = async (
    req,
    res
  ) => {

    return res.json(v1Response(data));
  };

  getById: RequestHandler<{ id: string }, IAPIV1Response> = (req, res) => {

    return res.json(v1Response(data));
  };


  getAll: RequestHandler<
    unknown,
    IAPIV1Response,
    unknown,
    { query: IQueryStringParams }
  > = async (req, res) => {
    ProfileService.getAll()
    return res.json(v1Response(data));
  }

  update: RequestHandler<
    { id: string },
    IAPIV1Response,
    Partial<IProfile>
  > = async (req, res) => {

    return res.json(v1Response(data));


  }

  delete: RequestHandler<{ id: string }, IAPIV1Response> = async (req, res) => {
    return res.json(v1Response());
  };
}

export const profileController = new ProfileController();

