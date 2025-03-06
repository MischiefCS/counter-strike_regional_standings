### Roster Details<br />
Team Name: Preasy Esport<br />
Roster: AcilioN, Beccie, Griller, Patti, Viggo<br />
Global Rank: [118](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [83]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  658.9<br />
<br />
Final Rank Value (658.9) = Starting Rank Value (685.3) + Head To Head Adjustments (-26.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.315[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.131<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 685.3
- 400 + ( ( 0.131 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 685.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                                  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       79 | 2025-02-23 | ARCRED                                    | L   | 0.726      | -            | -                | -                | -         |   -14.94 | AcilioN, Beccie, Griller, Patti, Viggo |
|            8 |       83 | 2025-02-23 | GardenGarage                              | W   | 0.725      | 0.143        | 0.000 (0.000)    | 0.080 (0.008)    | 0 (0.000) |     4.29 | AcilioN, Beccie, Griller, Patti, Viggo |
|            7 |       90 | 2025-02-23 | AMKAL ESPORTS                             | W   | 0.724      | 0.143        | 0.000 (0.000)    | 0.248 (0.026)    | 0 (0.000) |     8.06 | AcilioN, Beccie, Griller, Patti, Viggo |
|            6 |      237 | 2025-02-15 | RUBY                                      | L   | 0.671      | -            | -                | -                | -         |   -15.02 | AcilioN, Beccie, Griller, Patti, Viggo |
|            5 |      717 | 2025-01-07 | Copenhagen Wolves (American organization) | W   | 0.412      | 0.284        | 0.007 (0.001)    | 0.643 (0.075)    | 0 (0.000) |     8.08 | AcilioN, Beccie, Griller, Patti, Viggo |
|            4 |      795 | 2024-12-20 | Astralis Talent                           | L   | 0.290      | -            | -                | -                | -         |    -4.52 | AcilioN, Beccie, Equip, Griller, Viggo |
|            3 |      806 | 2024-12-19 | ADEPTS                                    | L   | 0.283      | -            | -                | -                | -         |    -6.46 | AcilioN, Beccie, Equip, Griller, Viggo |
|            2 |      808 | 2024-12-19 | KONO.ECF                                  | L   | 0.282      | -            | -                | -                | -         |    -3.96 | AcilioN, Beccie, Equip, Griller, Viggo |
|            1 |     1108 | 2024-12-02 | Monte                                     | L   | 0.172      | -            | -                | -                | -         |    -1.95 | AcilioN, Beccie, Equip, Griller, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($823.61)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-01-07 |      0.412 | $2,000.00      | $823.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
