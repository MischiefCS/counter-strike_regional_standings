### Roster Details<br />
Team Name: IHC Esports<br />
Roster: AccuracyTG, efire, rate, ROUX, Zesta<br />
Global Rank: [150](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [18]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  650.6<br />
<br />
Final Rank Value (650.6) = Starting Rank Value (648.1) + Head To Head Adjustments (2.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.273[<sup>1</sup>](#table2)
- Bounty Collected: 0.204[<sup>2</sup>](#table1)
- Opponent Network: 0.003[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 648.1
- 400 + ( ( 0.120 - 0.000 ) / ( 0.774 - 0.000 ) ) * 1600 = 648.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     1625 | 2024-11-08 | Ex-GR Gaming                  | L   | 0.196      | -            | -                | -                | -         |    -2.79 | AccuracyTG, efire, rate, ROUX, Zesta |
|            4 |     1628 | 2024-11-07 | The Huns Esports              | W   | 0.195      | 0.333        | 0.019 (0.001)    | 0.455 (0.030)    | 0 (0.000) |     4.83 | AccuracyTG, efire, rate, ROUX, Zesta |
|            3 |     1643 | 2024-11-06 | Clutch Gaming                 | W   | 0.189      | 0.333        | 0.000 (0.000)    | 0.018 (0.001)    | 0 (0.000) |     1.87 | AccuracyTG, efire, rate, ROUX, Zesta |
|            2 |     1668 | 2024-11-04 | Ex-GR Gaming                  | L   | 0.175      | -            | -                | -                | -         |    -2.51 | AccuracyTG, efire, rate, ROUX, Zesta |
|            1 |     1669 | 2024-11-04 | NOVA Esports (Mongolian team) | W   | 0.175      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.10 | AccuracyTG, efire, rate, ROUX, Zesta |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($490.39)
- Divide that value by the 5th highest value among all rosters ($225,665.16)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-08 |      0.196 | $2,500.00      | $490.39         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
