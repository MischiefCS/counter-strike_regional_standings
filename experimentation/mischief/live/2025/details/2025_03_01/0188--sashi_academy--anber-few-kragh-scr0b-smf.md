### Roster Details<br />
Team Name: Sashi Academy<br />
Roster: anber, Few, Kragh, Scr0b, smF<br />
Global Rank: [188](../../standings_global_2025_03_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_03_01.md)<br />
Regional Rank: [128]( ../../standings_europe_2025_03_01.md)<br />
<br />
Final Rank Value:  678.5<br />
<br />
Final Rank Value (678.5) = Starting Rank Value (664.2) + Head To Head Adjustments (14.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.252[<sup>1</sup>](#table2)
- Bounty Collected: 0.246[<sup>2</sup>](#table1)
- Opponent Network: 0.042[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.135<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 664.2
- 400 + ( ( 0.135 - 0.000 ) / ( 0.819 - 0.000 ) ) * 1600 = 664.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent                   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |     1312 | 2024-12-20 | Dark Cloud Esports         | L   | 0.726      | -            | -                | -                | -         |    -7.70 | anber, Few, Kragh, Scr0b, smF        |
|            8 |     1342 | 2024-12-19 | ALASKA                     | W   | 0.718      | 0.303        | 0.030 (0.007)    | 0.634 (0.138)    | 0 (0.000) |    18.55 | anber, Few, Kragh, Scr0b, smF        |
|            7 |     1387 | 2024-12-16 | Venom (Swedish team)       | W   | 0.698      | 0.303        | 0.000 (0.000)    | 0.039 (0.008)    | 0 (0.000) |     6.60 | anber, Few, Kragh, Scr0b, smF        |
|            6 |     1670 | 2024-12-08 | BRUTE                      | L   | 0.647      | -            | -                | -                | -         |    -9.11 | anber, Dengzoe, Few, Kragh, Scr0b    |
|            5 |     1973 | 2024-12-02 | WOPA Esport                | L   | 0.607      | -            | -                | -                | -         |    -5.75 | anber, Dengzoe, Few, Kragh, Scr0b    |
|            4 |     2046 | 2024-12-01 | MASONIC                    | L   | 0.600      | -            | -                | -                | -         |   -11.61 | anber, Damkilde, Dengzoe, Few, Scr0b |
|            3 |     2106 | 2024-11-30 | 777 Esports                | W   | 0.594      | 0.333        | 0.001 (0.000)    | 0.155 (0.031)    | 0 (0.000) |     7.61 | anber, Dengzoe, Few, Kragh, Scr0b    |
|            2 |     2212 | 2024-11-28 | NEVERMORE (Ukrainian team) | W   | 0.580      | 0.333        | 0.010 (0.002)    | 0.974 (0.189)    | 0 (0.000) |    10.61 | anber, Dengzoe, Few, Kragh, Scr0b    |
|            1 |     2277 | 2024-11-26 | Ex-UHKA eSports            | W   | 0.567      | 0.333        | 0.000 (0.000)    | 0.315 (0.060)    | 0 (0.000) |     5.07 | anber, Dengzoe, Few, Kragh, Scr0b    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($365.42)
- Divide that value by the 5th highest value among all rosters ($336,474.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-21 |      0.731 | $500.00        | $365.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
