### Roster Details<br />
Team Name: Team Turkey<br />
Roster: EMSTAR, h0kz, imoRR, lugseN, scolleN<br />
Global Rank: [170](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [107]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  518.2<br />
<br />
Final Rank Value (518.2) = Starting Rank Value (519.2) + Head To Head Adjustments (-1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.198[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.020[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 519.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 519.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                    | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1451 | 2024-11-15 | Team Norway                 | L   | 0.057      | -            | -                | -                | -         |    -1.14 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            4 |     1464 | 2024-11-15 | Los kogutos                 | L   | 0.056      | -            | -                | -                | -         |    -0.70 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            3 |     1472 | 2024-11-14 | Mindfreak (Australian team) | W   | 0.052      | 0.617        | 0.000 (0.000)    | 0.006 (0.000)    | 1 (0.052) |     0.57 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            2 |     1514 | 2024-11-13 | Metizport                   | W   | 0.044      | 0.617        | 0.033 (0.001)    | 0.307 (0.008)    | 1 (0.044) |     1.15 | EMSTAR, h0kz, imoRR, lugseN, scolleN |
|            1 |     1518 | 2024-11-13 | Team Canada                 | L   | 0.044      | -            | -                | -                | -         |    -0.90 | EMSTAR, h0kz, imoRR, lugseN, scolleN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
